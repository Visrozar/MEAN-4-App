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
    private router: Router,
    private dashFilter: DashboardPipe
  ) {

    $('.close').click(e => {
      e.preventDefault();
      e.stopPropogation();
    });


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

  saveList: any = [];
  roleList: any = [];
  sectorList: any = [];
  indicationList: any = [];
  stageProgramList: any = [];
  financingList: any = [];
  roleActive = false;
  sectorActive = false;
  indicationActive = false;
  stageActive = false;
  financingActive = false;
  listOpenActive = false;
  roleDisabled = true;
  sectorDisabled = true;
  indicationDisabled = true;
  stageDisabled = true;
  financingDisabled = true;
  overlayActive = false;
  projectoverlayActive = false;
  projectId: any;
  deleteData: any;

  isEmpty = false;

  filterLabels = [{
    'name': 'isaac',
    'role': [
      'Placement agent',
      'Business developer'
    ],
    'sector': [
      'Health tech',
      'Agro'
    ],
    'indication': [
      'Nutrition and weight loss',
      'Gynecology and Obstetrics Oncology'
    ],
    'stage': [
      'Greenhouse',
      'Field trials'
    ],
    'financing': [
      'Series C',
      'Series D'
    ]
  }, {
    'name': 'elvis',
    'role': [
      'Advisor'
    ],
    'sector': [
    ],
    'indication': [
    ],
    'stage': [

    ],
    'financing': [

    ]

  }, {
    'name': 'niven',
    'role': [
      'Placement agent'
    ],
    'sector': [
    ],
    'indication': [
    ],
    'stage': [
    ],
    'financing': [
    ]

  }];


  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
      this.role = profile.user.role;
    });
    const self = this;
    document.addEventListener('click', function (event) {
      if (event.srcElement.className.toString() !== 'overSelect' &&
        event.srcElement.className.toString() !== 'hide-box' && self.router.url.toString() === '/dashboard') {
        self.roleDisabled = true;
        self.sectorDisabled = true;
        self.indicationDisabled = true;
        self.stageDisabled = true;
        self.financingDisabled = true;
      }
    });
    this.getDashboard();
    // this.getFilterList();
  }

  getDashboard() {
    this.authService.getDashboard().subscribe(dashboard => {
      this.projects = dashboard.projects;
      this.saveList = this.projects;
    });
  }

  removeEntry() {
    this.authService.deleteProject(this.projectId).subscribe(data => {
      this.message = data.message;
    });
    this.clearProjectdata();
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
        this.uploadService.editProject(dash).subscribe(data => {
          if (!data.success) {
            this.getDashboard();
            console.log(data.message); // Return error message
          } else {
            console.log(data.message); // Return success message
          }
        });
      }
      dash.likeClick = true;
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

    if (type === 'role' && this.roleDisabled === true) {
      this.roleDisabled = false;
      this.roleActive = true;
    } else {
      this.roleDisabled = true;
      this.roleActive = false;
    }

    if (type === 'sector' && this.sectorDisabled === true) {
      this.sectorActive = true;
      this.sectorDisabled = false;
    } else {
      this.sectorActive = false;
      this.sectorDisabled = true;
    }

    if (type === 'indication' && this.indicationDisabled === true) {
      this.indicationActive = true;
      this.indicationDisabled = false;
    } else {
      this.indicationActive = false;
      this.indicationDisabled = true;
    }

    if (type === 'stage' && this.stageDisabled === true) {
      this.stageActive = true;
      this.stageDisabled = false;
    } else {
      this.stageActive = false;
      this.stageDisabled = true;
    }

    if (type === 'financing' && this.financingDisabled === true) {
      this.financingActive = true;
      this.financingDisabled = false;
    } else {
      this.financingActive = false;
      this.financingDisabled = true;
    }

  }

  filterList() {
    const role = $(`input[name=role2]:checked`);
    const sector = $(`input[name=sector2]:checked`);
    const indication = $(`input[name=indication2]:checked`);
    const stage = $(`input[name=stage2]:checked`);
    const financing = $(`input[name=financing2]:checked`);

    const roleArray = [];
    const sectorArray = [];
    const indicationArray = [];
    const stageArray = [];
    const financingArray = [];

    if (role.length !== 0) {
      for (let i = 0; i < role.length; i++) {
        roleArray.push(role[i].nextSibling.data);
      }
    }

    if (sector.length !== 0) {
      for (let i = 0; i < sector.length; i++) {
        sectorArray.push(sector[i].nextSibling.data);
      }
    }

    if (indication.length !== 0) {
      for (let i = 0; i < indication.length; i++) {
        indicationArray.push(indication[i].nextSibling.data);
      }
    }

    if (stage.length !== 0) {
      for (let i = 0; i < stage.length; i++) {
        stageArray.push(stage[i].nextSibling.data);
      }
    }

    if (financing.length !== 0) {
      for (let i = 0; i < financing.length; i++) {
        financingArray.push(financing[i].nextSibling.data);
      }
    }
    this.projects = this.dashFilter.transform(this.saveList, roleArray, sectorArray, indicationArray, stageArray, financingArray);
  }

  clearFilter() {
    const role = $(`input[name=role2]:checked`);
    const sector = $(`input[name=sector2]:checked`);
    const indication = $(`input[name=indication2]:checked`);
    const stage = $(`input[name=stage2]:checked`);
    const financing = $(`input[name=financing2]:checked`);

    if (role) {
      for (let i = 0; i < role.length; i++) {
        role[i].checked = false;
      }
    }
    if (sector) {
      for (let i = 0; i < sector.length; i++) {
        sector[i].checked = false;
      }
    }
    if (indication) {
      for (let i = 0; i < indication.length; i++) {
        indication[i].checked = false;
      }
    }
    if (stage) {
      for (let i = 0; i < stage.length; i++) {
        stage[i].checked = false;
      }
    }
    if (financing) {
      for (let i = 0; i < financing.length; i++) {
        financing[i].checked = false;
      }
    }
    this.projects = this.saveList;
  }

  saveFilter() {
    const filterName = $('input[name=filterName]').val();
    if (filterName.toString() === '') {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
      const role = $(`input[name=role2]:checked`);
      const sector = $(`input[name=sector2]:checked`);
      const indication = $(`input[name=indication2]:checked`);
      const stage = $(`input[name=stage2]:checked`);
      const financing = $(`input[name=financing2]:checked`);

      const roleArray = [];
      const sectorArray = [];
      const indicationArray = [];
      const stageArray = [];
      const financingArray = [];

      if (role.length !== 0) {
        for (let i = 0; i < role.length; i++) {
          roleArray.push(role[i].nextSibling.data);
        }
      }

      if (sector.length !== 0) {
        for (let i = 0; i < sector.length; i++) {
          sectorArray.push(sector[i].nextSibling.data);
        }
      }

      if (indication.length !== 0) {
        for (let i = 0; i < indication.length; i++) {
          indicationArray.push(indication[i].nextSibling.data);
        }
      }

      if (stage.length !== 0) {
        for (let i = 0; i < stage.length; i++) {
          stageArray.push(stage[i].nextSibling.data);
        }
      }

      if (financing.length !== 0) {
        for (let i = 0; i < financing.length; i++) {
          financingArray.push(financing[i].nextSibling.data);
        }
      }

      const object = {
        name: filterName.toString(), role: roleArray, sector: sectorArray, indication: indicationArray,
        stage: stageArray, financing: financingArray
      };
      // this.authService.saveFilter(object).subscribe(data => {
      //   // Check if response was a success or error
      //   if (!data.success) {
      //     // error
      //   } else {
      //     // success
      //   }
      // });

    }

  }

  getFilterList() {
    this.authService.getFilterList().subscribe(data => {
      this.filterLabels = data;
    });
  }

  clearSpecificFilter() {
    // this.authService.deleteFilter(this.deleteData.name).subscribe(data => {
    //     // Check if response was a success or error
    //     if (!data.success) {
    //       // error
    //     } else {
    //       // success
    //       this.getFilterList();
    //       this.projects = this.saveList;
    //     }
    //   });
    this.clearDeletedata();
  }

  useFilter(filter) {
    if (event.srcElement.className.toString() === 'filter-labels') {
      this.projects = this.dashFilter.transform(this.saveList, filter.role, filter.sector, filter.indication, filter.stage,
        filter.financing);
    }
  }

  toggleModal(filter) {
    this.deleteData = filter;
    this.overlayActive = true;
  }

  clearDeletedata() {
    this.deleteData = '';
    this.overlayActive = false;
  }

  activateOverlay(id) {
    this.projectId = id;
    this.projectoverlayActive = true;
  }

  clearProjectdata() {
    this.projectId = '';
    this.projectoverlayActive = false;
  }

  approveEntry(dash) {
    dash.approvestatus = 1;
    this.uploadService.editProject(dash).subscribe(data => {
      if (!data.success) {
        this.getDashboard();
        console.log(data.message); // Return error message
      } else {
        console.log(data.message); // Return success message
        this.getDashboard();
      }
    });
  }

}
