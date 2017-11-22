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
    const location = $(`input[name=locati]:checked`);
    const focus = $(`input[name=focu]:checked`);
    const indication = $(`input[name=indica]:checked`);
    const investment = $(`input[name=inves]:checked`);

    const temp = [];

    if (investment.length !== 0) {
      for (let i = 0; i < investment.length; i++) {
        temp.push(this.listFilter.transform(this.saveList, '', '', '', investment[i].nextSibling.data));
      }
    }

    if (location.length !== 0) {
      for (let i = 0; i < location.length; i++) {
        temp.push(this.listFilter.transform(this.saveList, location[i].nextSibling.data, '', '', ''));
      }
    }

    if (focus.length !== 0) {
      for (let i = 0; i < focus.length; i++) {
        temp.push(this.listFilter.transform(this.saveList, '', focus[i].nextSibling.data, '', ''));
      }
    }

    if (indication.length !== 0) {
      for (let i = 0; i < indication.length; i++) {
        temp.push(this.listFilter.transform(this.saveList, '', '', indication[i].nextSibling.data, ''));
      }
    }
    // let tempor = tempo;
    temp.forEach(function(tempo, i) {
      if (temp.indexOf(tempo) > i) {
        console.log('yupp');
      }
    });
    // temp.filter(tempo => {
    //   if(indexOf())
    // })

    // this.vclists = temp[0];
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
    this.vclists = this.saveList;
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

  showCheckboxes(type: string) {
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
