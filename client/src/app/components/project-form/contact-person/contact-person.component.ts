import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personal }            from '../../../formData.model';
import { FormService }     from '../../../services/form.service';

@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.scss']
})

export class ContactPersonComponent implements OnInit {
  title = 'Please tell us about yourself.';
  personal: Personal;
  form: any;
  
  constructor(private router: Router, private FormService: FormService) {
  }

  ngOnInit() {
      this.personal = this.FormService.getPersonal();
      console.log('Personal feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.FormService.setPersonal(this.personal);
      return true;
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/deal_discription']);
      }
  }
}
