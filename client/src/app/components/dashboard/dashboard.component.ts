import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormService } from '../../services/form.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  projects:any = [];
  username;

  constructor(
    private authService: AuthService, private formService: FormService
  ) { }

  dashboardData: any = [
    {
      'name': 'Isaac',
      'role': 'Founder',
      'organization': 'Izac',
      'telephone': '123456789',
      'email': 'isaac@isaac.com',
      'website': '',
      'work': '',
      'dealName': 'Isaacs dynamic deal',
      'location': 'Isaacnation',
      'sector': 'Agro',
      'indication': '',
      'stageLead': '',
      'financing': '',
      'investment': '',
      'techonology': '',
      'programDescription': '',
      'comments': '',
      'fileUrl': ''
    },
    {
      'name': 'Elvish',
      'role': 'Advisor',
      'organization': 'Elven works',
      'telephone': '',
      'email': 'elvis@eleven.com',
      'website': '',
      'work': '',
      'dealName': 'Elvis Elvis',
      'location': 'Elven Kingdom',
      'sector': 'Health tech',
      'indication': '',
      'stageLead': '',
      'financing': '',
      'investment': '',
      'techonology': '',
      'programDescription': '',
      'comments': '',
      'fileUrl': ''
    },
    {
      'name': 'Niven',
      'role': 'Placement agent',
      'organization': 'Nadar Nofear Syndicate',
      'telephone': '',
      'email': 'nitesh@navin.com',
      'website': '',
      'work': '',
      'dealName': 'Nilesh murder agreement',
      'location': 'sector-17, vashi',
      'sector': 'Medical devices',
      'indication': '',
      'stageLead': '',
      'financing': '',
      'investment': '',
      'techonology': '',
      'programDescription': '',
      'comments': '',
      'fileUrl': ''
    }
  ];

  ngOnInit() {
    this.formService.showProjectForm = false;
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

  removeEntry(dash) {
    console.log(dash);
    this.dashboardData.splice(this.dashboardData.indexOf(dash), 1);
  }

  editEntry(dash){
    
  }

}
