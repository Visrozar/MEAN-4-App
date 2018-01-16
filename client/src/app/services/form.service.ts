import { Injectable } from '@angular/core';
import { FormData, Personal, Deal } from '../formData.model';
import { VcData } from '../vcData.model';
import { WorkflowService } from './workflow.service';
import { STEPS } from '../workflow.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FormService {
    private formData: FormData = new FormData();
    private vcData: VcData = new VcData();
    private isPersonalFormValid = false;
    private isWorkFormValid = false;
    private isAddressFormValid = false;
    public file: any;
    public fileData: any;
    public showProjectForm = false;
    public showContactForm = false;
    public showDealForm = false;
    public showResultForm = false;
    public submited = false;
    public vcsubmited = false;
    public showThanks = false;
    public contact: any;
    public vcdata: any;
    public deal: any;
    public editClick = false;
    public vceditClick = false;
    public id: any;
    public detailData: any;
    public showError = false;
    public fileName;
    public fileUrl;
    public vcId;

    constructor(private workflowService: WorkflowService, public http: Http) {
    }

    getSelectData() {
        return this.http.get('../assets/form.json')
            .map((res: Response) => res.json());
    }

    upload(formData, name) {
        return this.http.post('https://upload.uploadcare.com/base/' + name, formData)
            .map(response => response.json())
            .catch(error => Observable.throw(error));
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            _id: this.formData._id,
            name: this.formData.name,
            role: this.formData.role,
            organization: this.formData.organization,
            telephone: this.formData.telephone,
            website: this.formData.website,
            email: this.formData.email
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData._id = data._id;
        this.formData.name = data.name;
        this.formData.role = data.role;
        this.formData.organization = data.organization;
        this.formData.telephone = data.telephone;
        this.formData.website = data.website;
        this.formData.email = data.email;
        this.workflowService.validateStep(STEPS.contact_person);
    }

    getWork(): string {
        // Return the work type
        return this.formData.work;
    }

    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        this.workflowService.validateStep(STEPS.deal_discription);
    }

    getAddress(): Deal {
        // Return the Address data
        var deal: Deal = {
            dealName: this.formData.dealName,
            location: this.formData.location,
            sector: this.formData.sector,
            indication: this.formData.indication,
            stageLead: this.formData.stageLead,
            financing: this.formData.financing,
            investment: this.formData.investment,
            technology: this.formData.technology,
            programDescription: this.formData.programDescription,
            comments: this.formData.comments,
            fileName: this.formData.fileName
        };
        return deal;
    }

    setAddress(data: Deal) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.dealName = data.dealName;
        this.formData.location = data.location;
        this.formData.sector = data.sector;
        this.formData.indication = data.indication;
        this.formData.stageLead = data.stageLead;
        this.formData.financing = data.financing;
        this.formData.investment = data.investment;
        this.formData.technology = data.technology;
        this.formData.programDescription = data.programDescription;
        this.formData.comments = data.comments;
        this.formData.fileName = data.fileName;
        this.workflowService.validateStep(STEPS.deal_discription);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    getVcFormData(): VcData {
        return this.vcData;
    }

    resetVcData(): VcData {
        this.vcData.clear();
        return this.vcData;
    }

    resetFormData(): FormData {
        // Return the form data after all this.* members had been reset
        this.workflowService.resetSteps();
        this.formData.clear();
        this.isPersonalFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isAddressFormValid;
    }



}
