import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormService } from '../../services/form.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username = '';
  email = '';

  constructor(
    private authService: AuthService, private formService: FormService
  ) { }


  ngOnInit() {
    this.formService.showProjectForm = false;
    // Once component loads, get user's data to display on profile
    this.authService.getDashboard().subscribe(profile => {
      this.username = profile.user.username; // Set username
      this.email = profile.user.email; // Set e-mail
    });
  }

}
