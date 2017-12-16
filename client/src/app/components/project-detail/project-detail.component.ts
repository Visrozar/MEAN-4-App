import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { AuthService } from '../../services/auth.service';
import { UploadFileService } from '../../services/upload-file.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  username;
  role;

  constructor(private authService: AuthService, private router: Router,
    private uploadService: UploadFileService, private formService: FormService) { }

  projectDetail: any;

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
      this.role = profile.user.role;
    });
    this.projectDetail = this.formService.detailData;
  }

}
