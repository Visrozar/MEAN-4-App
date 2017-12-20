import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormService } from '../../services/form.service';
import { UploadFileService } from '../../services/upload-file.service';
import { Router } from '@angular/router';
import { DashboardPipe } from '../../pipes/dashboard.pipe';
declare var $: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardPipe]
})
export class DashboardComponent implements OnInit {
  projects: any = [];
  style = 'glyphicon-heart-empty';
  username;
  role;
  message;

  constructor(
    private uploadService: UploadFileService,
    private authService: AuthService,
    private formService: FormService,
    private router: Router
  ) {
    this.formService.getSelectData().subscribe((data) => {
      this.roleList = data.role;
      // this.roleList.unshift('');
      this.sectorList = data.sector;
      // this.sectorList.unshift('');
      this.indicationList = data.indication;
      // this.indicationList.unshift('');
      this.stageProgramList = data.stage;
      // this.stageProgramList.unshift('');
      this.financingList = data.financing;
      // this.financingList.unshift('');
    });
  }

  roleList: any = [];
  sectorList: any = [];
  indicationList: any = [];
  stageProgramList: any = [];
  financingList: any = [];
  role1 = false;
  sector = false;
  indication = false;
  stage = false;
  finnacing = false;
  listOpen = false;

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
      this.role = profile.user.role;
    });

    const self = this;
    document.addEventListener('click', function (event) {
      if (event.srcElement.className.toString() !== 'overSelect' &&
        event.srcElement.className.toString() !== 'hide-box' && self.router.url.toString() === '/dashboard') {
        self.onBlur();
      }
    });

    this.getDashboard();
  }

  onBlur() {
    const roleCheckboxes = document.getElementById('roleCheckboxes');
    const sectorCheckboxes = document.getElementById('sectorCheckboxes');
    const indicationCheckboxes = document.getElementById('indicationCheckboxes');
    const stageCheckboxes = document.getElementById('stageCheckboxes');
    const finnacingCheckboxes = document.getElementById('finnacingCheckboxes');

    if (roleCheckboxes.style.display) {
      roleCheckboxes.style.display = 'none';
      this.role1 = false;
    }

    if (sectorCheckboxes.style.display) {
      sectorCheckboxes.style.display = 'none';
      this.sector = false;
    }

    if (indicationCheckboxes.style.display) {
      indicationCheckboxes.style.display = 'none';
      this.indication = false;
    }

    if (stageCheckboxes.style.display) {
      stageCheckboxes.style.display = 'none';
      this.stage = false;
    }

    if (finnacingCheckboxes.style.display) {
      finnacingCheckboxes.style.display = 'none';
      this.finnacing = false;
    }

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
    const a = $.inArray(this.username, dash.viewedBy);
    this.formService.detailData = dash;
    this.router.navigate(['/project_details']);
    if (this.username !== dash.createdBy) {
      if (a === -1) {
        dash.viewedBy.push(this.username);
      }
      // dash.views = dash.views + 1;
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

  showCheckboxes(type: string) {
    this.listOpen = true;
    const roleCheckboxes = document.getElementById('roleCheckboxes');
    const sectorCheckboxes = document.getElementById('sectorCheckboxes');
    const indicationCheckboxes = document.getElementById('indicationCheckboxes');
    const stageCheckboxes = document.getElementById('stageCheckboxes');
    const finnacingCheckboxes = document.getElementById('finnacingCheckboxes');

    if (type === 'role' && !this.role1) {
      roleCheckboxes.style.display = 'block';
      this.role1 = true;
    } else {
      roleCheckboxes.style.display = 'none';
      this.role1 = false;
    }

    if (type === 'sector' && !this.sector) {
      sectorCheckboxes.style.display = 'block';
      this.sector = true;
    } else {
      sectorCheckboxes.style.display = 'none';
      this.sector = false;
    }

    if (type === 'indication' && !this.indication) {
      indicationCheckboxes.style.display = 'block';
      this.indication = true;
    } else {
      indicationCheckboxes.style.display = 'none';
      this.indication = false;
    }

    if (type === 'stage' && !this.stage) {
      stageCheckboxes.style.display = 'block';
      this.stage = true;
    } else {
      stageCheckboxes.style.display = 'none';
      this.stage = false;
    }

    if (type === 'finnacing' && !this.finnacing) {
      finnacingCheckboxes.style.display = 'block';
      this.finnacing = true;
    } else {
      finnacingCheckboxes.style.display = 'none';
      this.finnacing = false;
    }

  }

}
