import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;
  processing = false;
  emailValid;
  emailMessage;
  usernameValid;
  usernameMessage;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private formService: FormService
  ) {
    this.createForm(); // Create Angular 4 Form when component loads

    this.formService.getSelectregData().subscribe((data) => {
      this.subsectorList = data.subsector;
      this.subsectorList.unshift('');
      this.indicationList = data.indication;
      this.indicationList.unshift('');
      this.financingList = data.financing;
      this.financingList.unshift('');
      this.therapeuticsList = data.stage.Therapeutics;
      this.diagnosticsList = data.stage.DiagnosticsandHealth;
      this.agroList = data.stage.Agro;
    });
  }

  subsectorList: any = [];
  indicationList: any = [];
  stage: any = {};
  financingList: any = [];
  therapeuticsList: any = [];
  diagnosticsList: any = [];
  agroList: any = [];
  therapeuticsArray = [];
  diagnosticsArray = [];
  agroArray = [];
  step1 = true;

  // Function to create registration form
  createForm() {
    this.form = this.formBuilder.group({
      // Email Input
      email: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(5), // Minimum length is 5 characters
        Validators.maxLength(30), // Maximum length is 30 characters
        this.validateEmail // Custom validation
      ])],
      // Username Input
      username: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15), // Maximum length is 15 characters
        // this.validateUsername // Custom validation
      ])],
      // Password Input
      password: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(8), // Minimum length is 8 characters
        Validators.maxLength(35), // Maximum length is 35 characters
        // this.validatePassword // Custom validation
      ])],
      // Role Input
      // role: ['', Validators.compose([
      //   Validators.required, // Field is required
      //   // this.validateRole // Custom validation
      // ])],
      // Confirm Password Input
      confirm: ['', Validators.required] // Field is required
    }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
  }

  // Function to disable the registration form
  disableForm() {
    this.form.controls['email'].disable();
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
    this.form.controls['confirm'].disable();
    // this.form.controls['subsector'].disable();
    // this.form.controls['indication'].disable();
    // this.form.controls['financing'].disable();
    // this.form.controls['thera'].disable();
    // this.form.controls['diagnostic'].disable();
    // this.form.controls['agro'].disable();
  }

  // Function to enable the registration form
  enableForm() {
    this.form.controls['email'].enable();
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
    this.form.controls['confirm'].enable();
    // this.form.controls['role'].enable();
    // this.form.controls['subsector'].enable();
    // this.form.controls['indication'].enable();
    // this.form.controls['financing'].enable();
    // this.form.controls['thera'].enable();
    // this.form.controls['diagnostic'].enable();
    // this.form.controls['agro'].enable();
  }

  // Function to validate e-mail is proper format
  validateEmail(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    // Test email against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid email
    } else {
      return { 'validateEmail': true }; // Return as invalid email
    }
  }

  // Function to validate username is proper format
  // validateUsername(controls) {
  //   // Create a regular expression
  //   const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
  //   // Test username against regular expression
  //   if (regExp.test(controls.value)) {
  //     return null; // Return as valid username
  //   } else {
  //     return { 'validateUsername': true } // Return as invalid username
  //   }
  // }

  // Function to validate password
  // validatePassword(controls) {
  //   // Create a regular expression
  //   const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
  //   // Test password against regular expression
  //   if (regExp.test(controls.value)) {
  //     return null; // Return as valid password
  //   } else {
  //     return { 'validatePassword': true } // Return as invalid password
  //   }
  // }

  // Function to validate role
  validateRole(controls) {
    // Test role
    if (controls.value === 'investor' || controls.value === 'enterpreneur') {
      return null; // Return as valid role
    } else {
      return { 'validateRole': true }; // Return as invalid role
    }
  }

  // Funciton to ensure passwords match
  matchingPasswords(password, confirm) {
    return (group: FormGroup) => {
      // Check if both fields are the same
      if (group.controls[password].value === group.controls[confirm].value) {
        return null; // Return as a match
      } else {
        return { 'matchingPasswords': true }; // Return as error: do not match
      }
    }
  }

  // Function to submit form
  onRegisterSubmit() {
    this.step1 = false;
    this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
    this.disableForm(); // Disable the form
    // Create user object form user's inputs
    const user = {
      email: this.form.get('email').value, // E-mail input field
      username: this.form.get('username').value, // Username input field
      password: this.form.get('password').value, // Password input field
      role: "investor", // Role input field
      subsector: $('select[name="subsector"]').val(),
      indication: $('select[name="indication"]').val(),
      financing: $('select[name="financing"]').val(),
      Therapeutics: this.therapeuticsArray,
      Diagnostics: this.diagnosticsArray,
      agro: this.agroArray,
    }

    // Function from authentication service to register user
    this.authService.registerUser(user).subscribe(data => {
      // Resposne from registration attempt
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set an error class
        this.message = data.message; // Set an error message
        this.processing = false; // Re-enable submit button
        this.enableForm(); // Re-enable form
      } else {
        this.messageClass = 'alert alert-success'; // Set a success class
        this.message = data.message; // Set a success message
        // After 2 second timeout, navigate to the login page
        // setTimeout(() => {
        //   this.router.navigate(['/home']); // Redirect to login view
        // }, 3000);
      }
    });

    const user1 = {
      username: this.form.get('username').value, // Username input field
      password: this.form.get('password').value // Password input field
    }

    // Function to send login data to API
    this.authService.login(user1).subscribe(data => {
      // Check if response was a success or error
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = data.message; // Set error message
        this.processing = false; // Enable submit button
        this.enableForm(); // Enable form for editting
      } else {
        this.messageClass = 'alert alert-success'; // Set bootstrap success class
        this.message = data.message; // Set success message
        // Function to store user's token in client local storage
        this.authService.storeUserData(data.token, data.user);
        this.authService.loggedIn();
        // After 2 seconds, redirect to dashboard page
        setTimeout(() => {
          this.router.navigate(['/dashboard']); // Navigate to dashboard view
        }, 2000);
      }
    });

  }

  // Function to check if e-mail is taken
  checkEmail() {
    // Function from authentication file to check if e-mail is taken
    this.authService.checkEmail(this.form.get('email').value).subscribe(data => {
      // Check if success true or false was returned from API
      if (!data.success) {
        this.emailValid = false; // Return email as invalid
        this.emailMessage = data.message; // Return error message
      } else {
        this.emailValid = true; // Return email as valid
        this.emailMessage = data.message; // Return success message
      }
    });
  }

  // Function to check if username is available
  checkUsername() {
    // Function from authentication file to check if username is taken
    this.authService.checkUsername(this.form.get('username').value).subscribe(data => {
      // Check if success true or success false was returned from API
      if (!data.success) {
        this.usernameValid = false; // Return username as invalid
        this.usernameMessage = data.message; // Return error message
      } else {
        this.usernameValid = true; // Return username as valid
        this.usernameMessage = data.message; // Return success message
      }
    });
  }

  checkClicked() {

    const thera = $(`input[name=thera]:checked`);
    const diagnostic = $(`input[name=diagnostic]:checked`);
    const agro = $(`input[name=agro]:checked`);

    for (let i = 0; i < thera.length; i++) {
      this.therapeuticsArray.push(thera[i].nextSibling.data);
    }

    for (let i = 0; i < diagnostic.length; i++) {
      this.diagnosticsArray.push(diagnostic[i].nextSibling.data);
    }

    for (let i = 0; i < agro.length; i++) {
      this.agroArray.push(agro[i].nextSibling.data);
    }
}

ngOnInit() {
}

}