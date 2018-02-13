import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personal } from '../../../formData.model';
import { FormService } from '../../../services/form.service';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-contact-person',
    templateUrl: './contact-person.component.html',
    styleUrls: ['./contact-person.component.scss']
})

export class ContactPersonComponent implements OnInit {
    personal: Personal;
    form: any;

    constructor(private router: Router, private formService: FormService, private authService: AuthService) {
        this.formService.getSelectData().subscribe((data) => {
            this.roleList = data.role;
            this.roleList.unshift('');
        });
    }

    roleList: any = [];
    emailValid = false;

    ngOnInit() {
        if (this.formService.editClick === true) {
            this.personal = this.formService.contact;
        } else {
            this.personal = this.formService.getPersonal();
        }
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formService.setPersonal(this.personal);
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.formService.showContactForm = false;
            this.formService.showDealForm = true;
        }
    }

    // checkEmail() {
    //     // Function from authentication file to check if e-mail is taken
    //     this.authService.checkEmail(this.form.get('email').value).subscribe(data => {
    //         // Check if success true or false was returned from API
    //         if (!data.success) {
    //             this.emailValid = false; // Return email as invalid
    //             if (data.message === 'E-mail is already taken') {
    //                 this.showInput = true;
    //             }
    //         } else {
    //             this.emailValid = true; // Return email as valid
    //             this.emailMessage = data.message; // Return success message
    //         }
    //     });
    // }
}
