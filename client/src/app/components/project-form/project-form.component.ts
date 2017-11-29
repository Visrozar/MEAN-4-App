import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  title = 'Multi-Step Wizard';
  @Input() formData;

  constructor(private FormService: FormService) { }

  ngOnInit() {
    this.formData = this.FormService.getFormData();
    console.log(this.title + ' loaded!');
  }

}
