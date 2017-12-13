import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormService } from '../../services/form.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projects: any = [];
  username;
  message;

  constructor(
    private authService: AuthService, private formService: FormService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
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
      techonology, programDescription, comments }) =>
      ({
        dealName, location, sector, indication, stageLead, financing, investment,
        techonology, programDescription, comments
      }))(dash);
    this.formService.deal = picked1;
  }

  clearModel() {
  }

}
