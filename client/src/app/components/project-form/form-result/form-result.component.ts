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

  constructor(private formService: FormService, private router: Router, private uploadService: UploadFileService) {
  }

  ngOnInit() {
    this.formService.showThanks = false;
    this.formData = this.formService.getFormData();
    this.isFormValid = this.formService.isFormValid();
  }

  goToPrevious(form: any) {
    this.formService.showDealForm = true;
    this.formService.showResultForm = false;
  }

  submit() {
    if (this.formService.file !== '') {
      this.currentFileUpload = new FileUpload(this.formService.fileData);
      const isaac = this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress, this.formData);
    }
    this.formService.showThanks = true;
    this.formService.submited = true;
    this.isFormValid = false;
  }
}
