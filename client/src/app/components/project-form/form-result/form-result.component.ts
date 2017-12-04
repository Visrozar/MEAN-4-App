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

  ngOnInit() {
      this.formData = this.FormService.getFormData();
      this.isFormValid = this.FormService.isFormValid();
      console.log('Result feature loaded!');
  }

  submit() {
      alert('Excellent Job!');
      this.formData = this.FormService.resetFormData();
      this.isFormValid = false;
  }
}
