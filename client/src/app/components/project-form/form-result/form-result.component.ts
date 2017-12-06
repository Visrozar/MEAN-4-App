import { Component, OnInit, Input } from '@angular/core';
import { FormData } from '../../../formData.model';
import { FormService } from '../../../services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.scss']
})

export class FormResultComponent implements OnInit {
  @Input() formData: FormData;
  isFormValid = false;

  constructor(private FormService: FormService, private router: Router) {
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
      this.FormService.upload(this.FormService.fileData, this.showFile).subscribe(success => {
        console.log(success);
      },
        error => {
          console.log(error);
        });
    }

    this.showThanks = true;
    this.formData = this.FormService.resetFormData();
    this.isFormValid = false;
  }
}
