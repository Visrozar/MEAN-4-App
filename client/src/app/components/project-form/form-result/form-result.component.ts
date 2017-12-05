import { Component, OnInit, Input } from '@angular/core';
import { FormData }            from '../../../formData.model';
import { FormService }     from '../../../services/form.service';

@Component({
  selector: 'app-form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.scss']
})

export class FormResultComponent implements OnInit {
  @Input() formData: FormData;
  isFormValid: boolean = false;
  
  constructor(private FormService: FormService) {
  }

  showThanks = false;
  showFile = this.FormService.file;

  ngOnInit() {
      this.formData = this.FormService.getFormData();
      this.isFormValid = this.FormService.isFormValid();
      console.log('Result feature loaded!');
  }

  submit() {
      // alert('Excellent Job!');
      if(this.showFile !== ''){
        this.FormService.upload(this.FormService.fileData,this.showFile).subscribe( success => {
          console.log(success)
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
