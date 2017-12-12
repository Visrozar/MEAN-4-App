import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  projects:any = [];
  username;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    // Once component loads, get user's data to display on profile
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
      console.log(this.username);
    });

    this.authService.getDashboard().subscribe(dashboard => {
      this.projects = dashboard.projects;
      console.log(this.projects);
    });
  }

}
