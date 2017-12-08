import { Component, OnInit, Input } from '@angular/core';
import { FormData } from '../../../formData.model';
import { FormService } from '../../../services/form.service';
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
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private FormService: FormService, private router: Router, private uploadService: UploadFileService) {
  }

  ngOnInit() {
    this.FormService.showThanks = false;
    this.formData = this.FormService.getFormData();
    this.isFormValid = this.FormService.isFormValid();
    console.log('Result feature loaded!');
  }

  goToPrevious(form: any) {
    // Navigate to the Deal discription
    // this.router.navigate(['/deal_discription']);
    this.FormService.showDealForm = true;
    this.FormService.showResultForm = false;
  }

  submit() {
    // alert('Excellent Job!');
    if (this.FormService.file !== '') {
      // const file = this.selectedFiles.item(0);
      this.currentFileUpload = new FileUpload(this.FormService.fileData);
      const isaac = this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress, this.formData);
      // this.formData.fileUrl = this.fileUpload.url;
      // this.FormService.upload(this.FormService.fileData, this.showFile).subscribe(success => {
      //   console.log(success);
      // },
      //   error => {
      //     console.log(error);
      //   });
    }
    this.FormService.showThanks = true;
    this.FormService.submited = true;
    // this.formData = this.FormService.resetFormData();
    this.isFormValid = false;
  }
}
