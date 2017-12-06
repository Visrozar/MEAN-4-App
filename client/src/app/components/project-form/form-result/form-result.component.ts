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
  progress: { percentage: number } = { percentage: 0 }

  constructor(private FormService: FormService, private router: Router, private uploadService: UploadFileService) {
  }

  showThanks = false;
  showFile = this.FormService.file;

  ngOnInit() {
    this.formData = this.FormService.getFormData();
    this.isFormValid = this.FormService.isFormValid();
    console.log('Result feature loaded!');
  }

  goToPrevious(form: any) {
    // Navigate to the Deal discription
    this.router.navigate(['/deal_discription']);
  }

  submit() {
    // alert('Excellent Job!');
    if (this.showFile !== '') {
      // const file = this.selectedFiles.item(0);
      this.currentFileUpload = new FileUpload(this.FormService.fileData);
      this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
      // this.FormService.upload(this.FormService.fileData, this.showFile).subscribe(success => {
      //   console.log(success);
      // },
      //   error => {
      //     console.log(error);
      //   });
    }

    this.showThanks = true;
    this.formData = this.FormService.resetFormData();
    this.isFormValid = false;
  }
}
