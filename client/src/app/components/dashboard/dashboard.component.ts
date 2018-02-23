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
      this.sectorList = data.sector;
      this.indicationList = data.indication;
      this.stageProgramList = data.stage;
      this.financingList = data.financing;
    });
  }

  saveList: any = [];
  roleList: any = [];
  sectorList: any = [];
  indicationList: any = [];
  stageProgramList: any = [];
  financingList: any = [];
  role1: any =[];
  sector1: any =[];
  indication1: any =[];
  stage1: any =[];
  financing1: any =[];
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
  isMessageEmpty = false;

  filterLabels: any = [];

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
    this.getFilterList();
  }

  getDashboard() {
    this.authService.getDashboard().subscribe(dashboard => {
      this.projects = dashboard.projects;
      this.projects = this.transform(this.projects);
      this.saveList = this.projects;
    });
  }

  transform(arr) {
    if (arr && arr.length) {
      return arr.filter(ar => {
        if (this.role === 'enterpreneur') {
          if (this.username === ar.createdBy) {
            return true;
          } else {
            return false;
          }
        }

        if (this.role === 'investor') {
          if (ar.approvestatus === 1) {
            return true;
          } else if (this.username === ar.createdBy) {
            return true;
          } else {
            return false;
          }
        }

        if (this.role === 'admin') {
          if (ar.approvestatus === 2) {
            return true;
          } else {
            return false;
          }
        }

      });
    }
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
    this.role1 = $(`input[name=role2]:checked`);
    this.sector1 = $(`input[name=sector2]:checked`);
    this.indication1 = $(`input[name=indication2]:checked`);
    this.stage1 = $(`input[name=stage2]:checked`);
    this.financing1 = $(`input[name=financing2]:checked`);

    const roleArray = [];
    const sectorArray = [];
    const indicationArray = [];
    const stageArray = [];
    const financingArray = [];

    if (this.role1.length !== 0) {
      for (let i = 0; i < this.role1.length; i++) {
        roleArray.push(this.role1[i].nextSibling.data);
      }
    }

    if (this.sector1.length !== 0) {
      for (let i = 0; i < this.sector1.length; i++) {
        sectorArray.push(this.sector1[i].nextSibling.data);
      }
    }

    if (this.indication1.length !== 0) {
      for (let i = 0; i < this.indication1.length; i++) {
        indicationArray.push(this.indication1[i].nextSibling.data);
      }
    }

    if (this.stage1.length !== 0) {
      for (let i = 0; i < this.stage1.length; i++) {
        stageArray.push(this.stage1[i].nextSibling.data);
      }
    }

    if (this.financing1.length !== 0) {
      for (let i = 0; i < this.financing1.length; i++) {
        financingArray.push(this.financing1[i].nextSibling.data);
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

  rejectEntry(dash) {
    const entryName = $('input[name=entryName]').val();
    if (entryName.toString() === '') {
      this.isMessageEmpty = true;
    } else {
      this.isMessageEmpty = false;
      dash.approvestatus = 0;
      dash.message = entryName;
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

  saveFilter() {
    const filterName = $('input[name=filterName]').val();
    if (filterName.toString() === '') {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;

      let role = [];
      let sector = []
      let indication = [];
      let stage = [];
      let financing =[];

      role = $(`input[name=role2]:checked`);
      sector = $(`input[name=sector2]:checked`);
      indication = $(`input[name=indication2]:checked`);
      stage = $(`input[name=stage2]:checked`);
      financing = $(`input[name=financing2]:checked`);

      const roleArray = [];
      const sectorArray = [];
      const indicationArray = [];
      const stageArray = [];
      const financingArray = [];

      if (role.length !== 0) {
        for (let i = 0; i < role.length; i++) {
          roleArray.push(role[i].nextSibling.data);
        }
      } else {
        role.length = 0;
      }

      if (sector.length !== 0) {
        for (let i = 0; i < sector.length; i++) {
          sectorArray.push(sector[i].nextSibling.data);
        }
      } else {
        role.length = 0;
      }

      if (indication.length !== 0) {
        for (let i = 0; i < indication.length; i++) {
          indicationArray.push(indication[i].nextSibling.data);
        }
      } else {
        role.length = 0;
      }

      if (stage.length !== 0) {
        for (let i = 0; i < stage.length; i++) {
          stageArray.push(stage[i].nextSibling.data);
        }
      } else {
        role.length = 0;
      }

      if (financing.length !== 0) {
        for (let i = 0; i < financing.length; i++) {
          financingArray.push(financing[i].nextSibling.data);
        }
      } else {
        role.length = 0;
      }

      const object = {
        name: filterName.toString(), createdBy: this.username, role: roleArray, sector: sectorArray, indication: indicationArray,
        stage: stageArray, financing: financingArray
      };
      if (this.isEmpty == false &&
        role.length !== 0 ||
        sector.length !== 0 ||
        indication.length !== 0 ||
        stage.length !== 0 || financing.length !== 0) {
        this.authService.saveFilter(object).subscribe(data => {
          if (!data.success) {
          } else {
          }
        });
      }
    }
  }

  getFilterList() {
    this.authService.getFilterList().subscribe(data => {
      this.filterLabels = data.filters;
    });
  }

  clearSpecificFilter() {
    this.authService.deleteFilter(this.deleteData._id).subscribe(data => {
      // Check if response was a success or error
      if (!data.success) {
        // error
      } else {
        // success
        this.getFilterList();
        this.projects = this.saveList;
      }
    });
    this.clearDeletedata();
    this.getFilterList();
  }

  useFilter(filter) {
    if (event.srcElement.className.toString() === 'filter-labels') {
      this.projects = this.dashFilter.transform(this.saveList, filter.role, filter.sector, filter.indication, filter.stage,
        filter.financing);

      // for (let i = 0; i < filter.role.length; i++) {
      //   $('input:contains("' + filter.role[i] + '")').prop('checked', true);
      // }

      // for (let i = 0; i < filter.sector.length; i++) {
      //   $('label').find('input').filter(':contains("' + filter.sector[i] + '")').prop('checked', true);
      // }

      // for (let i = 0; i < filter.indication.length; i++) {
      //   $('label').find('input').filter(':contains("' + filter.indication[i] + '")').prop('checked', true);
      // }

      // for (let i = 0; i < filter.stage.length; i++) {
      //   $('label').find('input').filter(':contains("' + filter.stage[i] + '")').prop('checked', true);
      // }

      // for (let i = 0; i < filter.financing.length; i++) {
      //   $('label').find('input').filter(':contains("' + filter.financing[i] + '")').prop('checked', true);
      // }
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
    const entryName = $('input[name=entryName]').val();
    dash.approvestatus = 1;
    dash.message = entryName;
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
