import { Component, OnInit, ElementRef } from '@angular/core';
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

    constructor(private router: Router, private formService: FormService, private elem: ElementRef) {
        this.formService.getSelectData().subscribe((data) => {
            this.sectorList = data.sector;
            this.sectorList.unshift('');
            this.indicationList = data.indication;
            this.indicationList.unshift('');
            this.stageProgramList = data.stage;
            this.stageProgramList.unshift('');
            this.financingList = data.financing;
            this.financingList.unshift('');
        });
    }

    sectorList: any = [];
    indicationList: any = [];
    stageProgramList: any = [];
    financingList: any = [];
    fileSelected: any;
    hideIndication = false;

    ngOnInit() {
        this.deal = this.formService.getAddress();
        this.formService.file = '';
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formService.setAddress(this.deal);
        return true;
    }

    onChange(deviceValue) {
        if (deviceValue.toString() === 'Agro') {
            this.hideIndication = true;
        } else {
            this.hideIndication = false;
        }
    }

    goToPrevious(form: any) {
        this.formService.showDealForm = false;
        this.formService.showContactForm = true;
    }

    goToNext(form: any) {
        if (this.elem.nativeElement.querySelector('#selectFile').files[0]) {
            const fileSelected: File = this.elem.nativeElement.querySelector('#selectFile').files[0];
            this.formService.file = fileSelected.name;
            this.formService.fileData = fileSelected;
        } else {
            this.formService.file = '';
            this.formService.fileData = '';
        }

        if (this.save(form)) {
            this.formService.showResultForm = true;
        }
    }
}
