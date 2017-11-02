import { Component, OnInit, NgModule } from '@angular/core';
import { VclistService } from '../../services/vclist.service';
import { Meta } from '@angular/platform-browser';
import { VcfilterPipe } from '../../vcfilter.pipe';
declare var $: any;


@Component({
  selector: 'app-vclist',
  templateUrl: './vclist.component.html',
  styleUrls: ['./vclist.component.scss']
})

@NgModule({
  declarations: [VcfilterPipe],
})


export class VclistComponent implements OnInit {

  constructor(private vclistService: VclistService, private metaService: Meta) {

    this.vclistService.getVclist().subscribe((data) => {
      this.vclists = data;
      const allowed = ['VC Name'];
      const vc_name = [];
      var locat = [];
      var focus = [];
      var indication = [];
      var investment = [];

      data.filter(function (val) {
        for (var key in val) {
          if (key === 'VC Name') {
            vc_name.push(val[key]); // val1 and etc...
          } else if (key === 'Location') {
            locat.push(val[key].split(" ").splice(-1)[0]);
          } else if (key === 'Investment Focus') {
            focus.push(val[key].split(','));
          } else if (key === 'Prefered Indication') {
            indication.push(val[key].split(','));
          } else if (key === 'Investment Stage') {
            investment.push(val[key].split(','));
          }
        }

      });

      //filtering unique values from array
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

      //country
      this.country = locat.filter(onlyUnique).filter(Boolean);

      // Investment Focus
      focus = [].concat.apply([], focus);
      focus = focus.map(function (el) {
        return el.trim();
      });
      this.focus = focus.filter(onlyUnique).filter(Boolean);

      //Prefered Indication
      indication = [].concat.apply([], indication);
      indication = indication.map(function (el) {
        return el.trim();
      });
      indication = indication.filter(onlyUnique);
      this.indication = indication.filter(Boolean);

      //Investment Stage
      investment = [].concat.apply([], investment);
      investment = investment.map(function (el) {
        return el.trim();
      });
      investment = investment.filter(onlyUnique);
      this.investment = investment.filter(Boolean);

      this.country.unshift("");
      this.focus.unshift("");
      this.indication.unshift("");
      this.investment.unshift("");

      // console.log(this.vclists);

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

  ngOnInit() {
  }

}
