import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { VclistService } from '../../services/vclist.service';
import { Meta } from '@angular/platform-browser';
import { VcfilterPipe } from '../../pipes/vcfilter.pipe';
import { AuthService } from '../../services/auth.service';
import { FormService } from '../../services/form.service';
declare var $: any;


@Component({
  selector: 'app-vclist',
  templateUrl: './vclist.component.html',
  styleUrls: ['./vclist.component.scss'],
  providers: [VcfilterPipe]
})


export class VclistComponent implements OnInit {
  username;
  role;

  constructor(private vclistService: VclistService,
    private metaService: Meta,
    private listFilter: VcfilterPipe,
    private router: Router,
    private authService: AuthService,
    private formService: FormService,
  ) {

    this.authService.getVC().subscribe((data) => {
      this.vclists = data.vcs;
      console.log(data.vcs);
      this.saveList = this.vclists;
      const allowed = ['VCName'];
      const vc_name = [];
      let locat = [];
      let focus = [];
      let indication = [];
      let investment = [];

      data.vcs.filter(function (val) {
        for (const key in val) {
          if (key === 'VCName') {
            vc_name.push(val[key]); // val1 and etc...
          } else if (key === 'Location') {
            if (val[key]) {
              locat.push(val[key].split(','));
            }
          } else if (key === 'InvestmentFocus') {
            if (val[key]) {
              focus.push(val[key].split(','));
            }
          } else if (key === 'PreferedIndication') {
            if (val[key]) {
              indication.push(val[key].split(','));
            }
          } else if (key === 'InvestmentStage') {
            if (val[key]) {
              investment.push(val[key].split(','));
            }
          }
        }
      });

      // filtering unique values from array
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

      // country
      this.country = locat.filter(onlyUnique).filter(Boolean);

      // Investment Focus
      focus = [].concat.apply([], focus);
      focus = focus.map(function (el) {
        return el.trim();
      });
      this.focus = this.vclistService.focus = focus.filter(onlyUnique).filter(Boolean);

      // Prefered Indication
      indication = [].concat.apply([], indication);
      indication = indication.map(function (el) {
        return el.trim();
      });
      indication = indication.filter(onlyUnique);
      this.indication = this.vclistService.indication = indication.filter(Boolean);

      // Investment Stage
      investment = [].concat.apply([], investment);
      investment = investment.map(function (el) {
        return el.trim();
      });
      investment = investment.filter(onlyUnique);
      this.investment = this.vclistService.investment = investment.filter(Boolean);

      this.metaService.addTags([
        { name: 'keywords', content: vc_name.toString() }
      ]);
    });
  }

  vclists: any = [];
  country: any = [];
  focus: any = [];
  indication: any = [];
  investment: any = [];
  count: any = {};
  reset = true;
  expanded = false;
  location = false;
  focus1 = false;
  indication1 = false;
  investment1 = false;
  saveList: any = [];
  vcId: any;
  message: any;

  locationLabels: any = [];
  indicationLabels: any = [];
  focusLabels: any = [];
  investmentLabels: any = [];

  listOpen = false;
  projectoverlayActive = false;

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      if (profile.user) {
        this.username = profile.user.username;
      }
      if (profile.user) {
        this.role = profile.user.role;
      }
    });

    const stickyOffset = $('.sticky').offset().top;

    $(window).scroll(function () {
      const sticky = $('.sticky'),
        scroll = $(window).scrollTop();

      if (scroll >= stickyOffset) {
        sticky.addClass('fixed');
      } else {
        sticky.removeClass('fixed');
      }
    });
    const self = this;
    document.addEventListener('click', function (event) {
      if (event.srcElement.className.toString() !== 'overSelect' &&
        event.srcElement.className.toString() !== 'hide-box' && self.router.url.toString() === '/vc_list') {
        self.onBlur();
      }
    });
  }

  editEntry(dash) {
    this.formService.vceditClick = true;
    this.formService.vcId = dash._id;
    const vcpicked = (({ _id, VCName, Location, InvestmentFocus, PreferedIndication, InvestmentStage,
      Featured, Research, FundStatus, IndustryPartner, SpecialCriteria, Website, fileUrl, fileName }) =>
      ({
        _id, VCName, Location, InvestmentFocus, PreferedIndication, InvestmentStage,
        Featured, Research, FundStatus, IndustryPartner, SpecialCriteria, Website, fileUrl, fileName
      }))(dash);
    this.formService.vcdata = vcpicked;
  }

  activateOverlay(id) {
    this.vcId = id;
    this.projectoverlayActive = true;
  }

  removeVC() {
    this.authService.deleteVC(this.vcId).subscribe(data => {
      this.message = data.message;
    });
    this.clearProjectdata();
    this.getVclist();
  }

  clearProjectdata() {
    this.vcId = '';
    this.projectoverlayActive = false;
  }

  removeEntry() {
    this.authService.deleteVC(this.vcId).subscribe(data => {
      this.message = data.message;
    });
    this.clearProjectdata();
    this.getVclist();
  }

  getVclist() {
    this.authService.getVC().subscribe((data) => {
      this.vclists = data.vcs;
    });
  }

  onBlur() {
    const locationCheckboxes = document.getElementById('locationCheckboxes');
    const focusCheckboxes = document.getElementById('focusCheckboxes');
    const indicationCheckboxes = document.getElementById('indicationCheckboxes');
    const investmentCheckboxes = document.getElementById('investmentCheckboxes');

    if (locationCheckboxes.style.display) {
      locationCheckboxes.style.display = 'none';
      this.location = false;
    }

    if (focusCheckboxes.style.display) {
      focusCheckboxes.style.display = 'none';
      this.focus1 = false;
    }

    if (indicationCheckboxes.style.display) {
      indicationCheckboxes.style.display = 'none';
      this.indication1 = false;
    }

    if (investmentCheckboxes.style.display) {
      investmentCheckboxes.style.display = 'none';
      this.investment1 = false;
    }

  }

  updateUrl(event) {
    event.target.src = event.target.currentSrc.slice(0, -3) + 'png';
    return;
  }

  filterList() {
    const location = $(`input[name=locati]:checked`);
    const focus = $(`input[name=focu]:checked`);
    const indication = $(`input[name=indica]:checked`);
    const investment = $(`input[name=inves]:checked`);

    const locationArray = [];
    const investmentArray = [];
    const indicationArray = [];
    const focusArray = [];

    if (investment.length !== 0) {
      for (let i = 0; i < investment.length; i++) {
        investmentArray.push(investment[i].nextSibling.data);
      }
    }

    if (location.length !== 0) {
      for (let i = 0; i < location.length; i++) {
        locationArray.push(location[i].nextSibling.data);
      }
    }

    if (focus.length !== 0) {
      for (let i = 0; i < focus.length; i++) {
        focusArray.push(focus[i].nextSibling.data);
      }
    }

    if (indication.length !== 0) {
      for (let i = 0; i < indication.length; i++) {
        indicationArray.push(indication[i].nextSibling.data);
      }
    }
    this.indicationLabels = indicationArray;
    this.focusLabels = focusArray;
    this.locationLabels = locationArray;
    this.investmentLabels = investmentArray;
    this.vclists = this.listFilter.transform(this.saveList, locationArray, focusArray, indicationArray, investmentArray);
  }

  clearFilter() {
    const location = $(`input[name=locati]:checked`);
    const focus = $(`input[name=focu]:checked`);
    const indication = $(`input[name=indica]:checked`);
    const investment = $(`input[name=inves]:checked`);

    if (location) {
      for (let i = 0; i < location.length; i++) {
        location[i].checked = false;
      }
    }
    if (focus) {
      for (let i = 0; i < focus.length; i++) {
        focus[i].checked = false;
      }
    }
    if (indication) {
      for (let i = 0; i < indication.length; i++) {
        indication[i].checked = false;
      }
    }
    if (investment) {
      for (let i = 0; i < investment.length; i++) {
        investment[i].checked = false;
      }
    }
    this.indicationLabels = [];
    this.focusLabels = [];
    this.locationLabels = [];
    this.investmentLabels = [];
    this.vclists = this.saveList;
  }

  clearSpecificFilter(value) {
    const location = $(`input[name=locati]:checked`);
    const focus = $(`input[name=focu]:checked`);
    const indication = $(`input[name=indica]:checked`);
    const investment = $(`input[name=inves]:checked`);

    if (location) {
      const locationIndex = this.locationLabels.indexOf(value);
      for (let i = 0; i < location.length; i++) {
        if (location[i].nextSibling.data === value) {
          location[i].checked = false;
          this.locationLabels.splice(locationIndex, 1);
        }
      }
    }
    if (focus) {
      const focusIndex = this.focusLabels.indexOf(value);
      for (let i = 0; i < focus.length; i++) {
        if (focus[i].nextSibling.data === value) {
          focus[i].checked = false;
          this.focusLabels.splice(focusIndex, 1);
        }
      }
    }
    if (indication) {
      const indicationIndex = this.indicationLabels.indexOf(value);
      for (let i = 0; i < indication.length; i++) {
        if (indication[i].nextSibling.data === value) {
          indication[i].checked = false;
          this.indicationLabels.splice(indicationIndex, 1);
        }
      }
    }
    if (investment) {
      const investmentIndex = this.investmentLabels.indexOf(value);
      for (let i = 0; i < investment.length; i++) {
        if (investment[i].nextSibling.data === value) {
          investment[i].checked = false;
          this.investmentLabels.splice(investmentIndex, 1);
        }
      }
    }
    this.filterList();
  }

  showCheckboxes(type: string) {
    this.listOpen = true;
    const locationCheckboxes = document.getElementById('locationCheckboxes');
    const focusCheckboxes = document.getElementById('focusCheckboxes');
    const indicationCheckboxes = document.getElementById('indicationCheckboxes');
    const investmentCheckboxes = document.getElementById('investmentCheckboxes');

    if (type === 'location' && !this.location) {
      locationCheckboxes.style.display = 'block';
      this.location = true;
    } else {
      locationCheckboxes.style.display = 'none';
      this.location = false;
    }

    if (type === 'focus' && !this.focus1) {
      focusCheckboxes.style.display = 'block';
      this.focus1 = true;
    } else {
      focusCheckboxes.style.display = 'none';
      this.focus1 = false;
    }

    if (type === 'indication' && !this.indication1) {
      indicationCheckboxes.style.display = 'block';
      this.indication1 = true;
    } else {
      indicationCheckboxes.style.display = 'none';
      this.indication1 = false;
    }

    if (type === 'investment' && !this.investment1) {
      investmentCheckboxes.style.display = 'block';
      this.investment1 = true;
    } else {
      investmentCheckboxes.style.display = 'none';
      this.investment1 = false;
    }

  }

}
