import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormService } from '../../services/form.service';
import { UploadFileService } from '../../services/upload-file.service';
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projects: any = [];
  style = 'glyphicon-heart-empty';
  username;
  role;
  message;

  constructor(
    private uploadService: UploadFileService, private authService: AuthService, private formService: FormService, private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
      this.role = profile.user.role;
    });

    this.getDashboard();
  }

  getDashboard() {
    this.authService.getDashboard().subscribe(dashboard => {
      this.projects = dashboard.projects;
    });
  }

  removeEntry(projectId) {
    this.authService.deleteProject(projectId).subscribe(data => {
      this.message = data.message;
    });
    this.getDashboard();
  }

  editEntry(dash) {
    this.formService.editClick = true;
    this.formService.id = dash._id;
    const picked = (({ _id, name, role, organization, telephone, email, website }) =>
      ({ name, role, organization, telephone, email, website }))(dash);
    this.formService.contact = picked;

    const picked1 = (({ dealName, location, sector, indication, stageLead, financing, investment,
      techonology, programDescription, comments, fileName }) =>
      ({
        dealName, location, sector, indication, stageLead, financing, investment,
        techonology, programDescription, comments, fileName
      }))(dash);
    this.formService.deal = picked1;
  }

  viewEntry(dash) {
    this.formService.detailData = dash;
    this.router.navigate(['/project_details']);
    if (this.username !== dash.createdBy) {
      dash.views = dash.views + 1;
      dash.likeClick = true;
      this.uploadService.editProject(dash).subscribe(data => {
        if (!data.success) {
          this.getDashboard();
          console.log(data.message); // Return error message
        } else {
          console.log(data.message); // Return success message
        }
      });
    }
  }

  changeStyle($event) {
    this.style = $event.type === 'mouseover' ? 'glyphicon-heart' : 'glyphicon-heart-empty';
  }

  addToLiked(dash) {
    const a = $.inArray(this.username, dash.likedBy);
    if (a === -1) {
      dash.likedBy.push(this.username);
    } else {
      const index = dash.likedBy.indexOf(this.username);
      if (index > -1) {
        dash.likedBy.splice(index, 1);
      }
    }
    dash.likeClick = true;
    this.uploadService.editProject(dash).subscribe(data => {
      if (!data.success) {
        this.getDashboard();
        console.log(data.message); // Return error message
      } else {
        console.log(data.message); // Return success message
      }
    });
  }

}
