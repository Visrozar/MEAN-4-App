import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FormData } from '../../formData.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  title = 'Multi-Step Wizard';
  @Input() formData;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formData = this.formService.getFormData();
    this.formService.showContactForm = true;
    console.log(this.formData);
    console.log(this.title + ' loaded!');
  }

  closeModal() {
    this.formService.showProjectForm = false;
    if (this.formService.submited === true) {
      this.formService.showContactForm = true;
      this.formService.showDealForm = false;
      this.formService.showResultForm = false;
      this.formService.submited = false;
      this.formService.showThanks = false;
    }
  }

}
