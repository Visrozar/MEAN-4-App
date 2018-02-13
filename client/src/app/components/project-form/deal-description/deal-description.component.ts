import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormData } from '../../../formData.model';
import { Deal } from '../../../formData.model';
import { FormService } from '../../../services/form.service';
import { AuthService } from '../../../services/auth.service';
import { FileUpload } from '../../../fileupload';
import { UploadFileService } from '../../../services/upload-file.service';

@Component({
    selector: 'app-deal-description',
    templateUrl: './deal-description.component.html',
    styleUrls: ['./deal-description.component.scss']
})


export class DealDescriptionComponent implements OnInit {
    @Input() formData: FormData;
    currentFileUpload: FileUpload;
    progress: { percentage: number } = { percentage: 0 };
    deal: Deal;
    form: any;
    username: any;

    constructor(private uploadService: UploadFileService,
        private router: Router, private formService: FormService,
        private elem: ElementRef, private authService: AuthService) {
        this.authService.getVC().subscribe((data) => {
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
    showAlready = false;
    alreadyFileUpload = false;

    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            if (!this.formService.listCompany) {
            this.username = profile.user.username;
            }
        });
        this.formData = this.formService.getFormData();
        if (this.formService.editClick === true) {
            this.formData._id = this.formService.contact._id;
        }
        if (this.formService.editClick === true) {
            this.deal = this.formService.deal;
            if (this.deal.fileName) {
                this.alreadyFileUpload = true;
            }
        } else {
            this.deal = this.formService.getAddress();
            this.alreadyFileUpload = false;
        }
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
        this.formService.showDealForm = false;
        this.formService.showResultForm = true;

        if (this.save(form)) {
            this.formService.showResultForm = true;
        }
    }

    checkDealName(test) {
        // Function from authentication file to check if username is taken
        this.authService.checkDealname(test.toString()).subscribe(data => {
            // Check if success true or success false was returned from API
            if (!data.success) {
                // this.showAlready = true;
            } else {

            }
        });
    }

    uploadFile() {
        if (!this.formService.listCompany) {
        this.formData.createdBy = this.username;
        }
        if (this.elem.nativeElement.querySelector('#selectFile').files[0]) {
            const fileSelected: File = this.elem.nativeElement.querySelector('#selectFile').files[0];
            this.currentFileUpload = new FileUpload(fileSelected);
            this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
            this.formService.file = fileSelected.name;
        }
    }

    removeFile() {
        this.alreadyFileUpload = false;
        this.formService.file = '';
        this.currentFileUpload = null;
    }
}
