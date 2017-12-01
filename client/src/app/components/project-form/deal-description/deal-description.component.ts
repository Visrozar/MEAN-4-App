import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deal } from '../../../formData.model';
import { FormService } from '../../../services/form.service';

@Component({
    selector: 'app-deal-description',
    templateUrl: './deal-description.component.html',
    styleUrls: ['./deal-description.component.scss']
})


export class DealDescriptionComponent implements OnInit {
    deal: Deal;
    form: any;

    constructor(private router: Router, private FormService: FormService) {
        this.FormService.getSelectData().subscribe((data) => {
            this.sectorList = data.sector;
            this.sectorList.unshift("");
            this.indicationList = data.indication;
            this.indicationList.unshift("");
            this.stageProgramList = data.stage;
            this.stageProgramList.unshift("");
            this.financingList = data.financing;
            this.financingList.unshift("");
        });
    }

    sectorList: any = [];
    indicationList: any = [];
    stageProgramList: any = [];
    financingList: any = [];

    ngOnInit() {
        this.deal = this.FormService.getAddress();
        console.log('Work feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.FormService.setAddress(this.deal);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['/project_form']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/form_result']);
        }
    }
}
