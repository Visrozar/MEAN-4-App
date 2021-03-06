import { Component, OnInit, Input } from '@angular/core';
import { FormData } from '../../../formData.model';
import { FormService } from '../../../services/form.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UploadFileService } from '../../../services/upload-file.service';
import { FileUpload } from '../../../fileupload';

@Component({
  selector: 'app-form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.scss']
})

export class FormResultComponent implements OnInit {
  @Input() formData: FormData;
  isFormValid = false;
  selectedFiles: FileList;
  profile;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  username;
  email;
  showError = false;

  constructor(
    public formService: FormService,
    private router: Router,
    private uploadService: UploadFileService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.formService.showThanks = false;
    this.formData = this.formService.getFormData();
    if (this.formService.editClick === true) {
      this.formData._id = this.formService.contact._id;
    }

    // get profile data
    this.authService.getProfile().subscribe(profile => {
      if (!this.formService.listCompany) {
        this.username = profile.user.username;
      }
    });
    this.isFormValid = this.formService.isFormValid();
  }

  goToPrevious(form: any) {
    this.formService.showDealForm = true;
    this.formService.showResultForm = false;
  }

  goToStart() {
    this.formService.showContactForm = true;
    this.formService.showDealForm = false;
    this.formService.showResultForm = false;
    this.showError = false;
    this.formService.showThanks = false;
  }

  submit() {

    if (!this.formService.listCompany) {
      this.formData.createdBy = this.username;
    }

    if (this.formService.editClick === true) {
      this.formData._id = this.formService.id;
      if (this.formService.file === '') {
        this.formService.fileName = '';
        this.formService.fileUrl = '';
      }
      this.formData.fileName = this.formService.fileName;
      this.formData.fileUrl = this.formService.fileUrl;
      this.uploadService.editProject(this.formData).subscribe(data => {
        if (!data.success) {
          this.formService.showThanks = false;
          this.showError = true;
          console.log(data.message); // Return error message
        } else {
          this.formService.showThanks = true;
          console.log(data.message); // Return success message
        }
      });
    } else {
      if (this.formService.file === '') {
        this.formService.fileName = '';
        this.formService.fileUrl = '';
      }
      this.formData.fileName = this.formService.fileName;
      this.formData.fileUrl = this.formService.fileUrl;
      this.formData.approvestatus = 2;
      this.formData.message = '';
      this.uploadService.newUserProject(this.formData).subscribe(data => {
        if (!data.success) {
          this.formService.showThanks = false;
          this.showError = true;
          console.log(data.message); // Return error message
        } else {
          this.formService.showThanks = true;
          console.log(data.message); // Return success message
        }
      });
    }
    this.formService.submited = true;
    this.isFormValid = false;
  }
}
