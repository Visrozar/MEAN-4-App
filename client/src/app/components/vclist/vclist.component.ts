import { Component, OnInit, NgModule } from '@angular/core';
import { VclistService } from '../../services/vclist.service';
import { Meta } from '@angular/platform-browser';
import { VcfilterPipe } from '../../vcfilter.pipe';
declare var $: any;


@Component({
  selector: 'app-vclist',
  templateUrl: './vclist.component.html',
  styleUrls: ['./vclist.component.scss'],
  providers: [VcfilterPipe]
})

@NgModule({
  declarations: [VcfilterPipe],
})


export class VclistComponent implements OnInit {

  constructor(private vclistService: VclistService, private metaService: Meta, private listFilter: VcfilterPipe) {

    this.vclistService.getVclist().subscribe((data) => {
      this.vclists = data;
      this.saveList = this.vclists;
      const allowed = ['VC Name'];
      const vc_name = [];
      var locat = [];
      var focus = [];
      var indication = [];
      var investment = [];

      data.filter(function (val) {
        for (const key in val) {
          if (key === 'VC Name') {
            vc_name.push(val[key]); // val1 and etc...
          } else if (key === 'Location') {
            val[key].forEach(element => {
              locat.push(element.split(' ').splice(-1)[0]);
            });
          } else if (key === 'Investment Focus') {
            focus.push(val[key].split(','));
          } else if (key === 'Prefered Indication') {
            indication.push(val[key].split(','));
          } else if (key === 'Investment Stage') {
            investment.push(val[key].split(','));
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
      this.focus = focus.filter(onlyUnique).filter(Boolean);

      // Prefered Indication
      indication = [].concat.apply([], indication);
      indication = indication.map(function (el) {
        return el.trim();
      });
      indication = indication.filter(onlyUnique);
      this.indication = indication.filter(Boolean);

      // Investment Stage
      investment = [].concat.apply([], investment);
      investment = investment.map(function (el) {
        return el.trim();
      });
      investment = investment.filter(onlyUnique);
      this.investment = investment.filter(Boolean);

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

  ngOnInit() {

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
  }

  updateUrl(event) {
    event.target.src = event.target.currentSrc.slice(0, -3) + 'png';
    return;
  }

  filterList(ele, type) {
    const boxes = $(`input[name=${type}]:checked`);
    this.vclists = this.saveList;
    if (boxes.length !== 0 && type === 'inves') {
      for (let i = 0; i < boxes.length; i++) {
        this.vclists = this.listFilter.transform(this.vclists, '', '', '', boxes[i].nextSibling.data);
      }
    } else if (boxes.length !== 0 && type === 'locati') {
      for (let i = 0; i < boxes.length; i++) {
        this.vclists = this.listFilter.transform(this.vclists, boxes[i].nextSibling.data, '', '', '');
      }
    } else if (boxes.length !== 0 && type === 'focu') {
      for (let i = 0; i < boxes.length; i++) {
        this.vclists = this.listFilter.transform(this.vclists, '', boxes[i].nextSibling.data, '', '');
      }
    } else if (boxes.length !== 0 && type === 'indica') {
      for (let i = 0; i < boxes.length; i++) {
        this.vclists = this.listFilter.transform(this.vclists, '', '', boxes[i].nextSibling.data, '');
      }
    } else {
      this.vclists = this.listFilter.transform(this.saveList, '', '', '', '');
    }
  }

  showlocationCheckboxes() {
    const locationCheckboxes = document.getElementById('locationCheckboxes');

    if (!this.location) {
      locationCheckboxes.style.display = 'block';
      this.location = true;
    } else {
      locationCheckboxes.style.display = 'none';
      this.location = false;
    }
  }

  showfocusCheckboxes() {
    const focusCheckboxes = document.getElementById('focusCheckboxes');

    if (!this.focus1) {
      focusCheckboxes.style.display = 'block';
      this.focus1 = true;
    } else {
      focusCheckboxes.style.display = 'none';
      this.focus1 = false;
    }
  }

  showindicationCheckboxes() {
    const indicationCheckboxes = document.getElementById('indicationCheckboxes');

    if (!this.indication1) {
      indicationCheckboxes.style.display = 'block';
      this.indication1 = true;
    } else {
      indicationCheckboxes.style.display = 'none';
      this.indication1 = false;
    }
  }
  showinvestmentCheckboxes() {
    const investmentCheckboxes = document.getElementById('investmentCheckboxes');

    if (!this.investment1) {
      investmentCheckboxes.style.display = 'block';
      this.investment1 = true;
    } else {
      investmentCheckboxes.style.display = 'none';
      this.investment1 = false;
    }
  }

}
