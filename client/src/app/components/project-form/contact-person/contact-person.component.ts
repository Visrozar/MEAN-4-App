import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personal } from '../../../formData.model';
import { FormService } from '../../../services/form.service';

@Component({
    selector: 'app-contact-person',
    templateUrl: './contact-person.component.html',
    styleUrls: ['./contact-person.component.scss']
})

export class ContactPersonComponent implements OnInit {
    personal: Personal;
    form: any;

    constructor(private router: Router, private formService: FormService) {
        this.formService.getSelectData().subscribe((data) => {
            this.roleList = data.role;
            this.roleList.unshift('');
        });
    }

    roleList: any = [];

    ngOnInit() {
        this.personal = this.formService.getPersonal();
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
}
