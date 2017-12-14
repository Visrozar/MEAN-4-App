import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { UploadFileService } from '../../services/upload-file.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  constructor(private router: Router, private uploadService: UploadFileService, private formService: FormService) { }

  projectDetail: any;

  ngOnInit() {
    this.formService.detailData.views = this.formService.detailData.views++;
    this.uploadService.editProject(this.formService.detailData).subscribe(data => {
      if (!data.success) {
        console.log(data.message); // Return error message
      } else {
        console.log(data.message); // Return success message
      }
    });
    console.log(this.formService.detailData);
    this.projectDetail = this.formService.detailData;
  }

}
