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
      const locat = [];
      const focus = [];

      data.filter(function (val) {
        for (var key in val) {
          if (key === 'VC Name') {
            vc_name.push(val[key]); // val1 and etc...
          } else if (key === 'Location') {
            locat.push(val[key].split(" ").splice(-1)[0]);
          } else if(key==='Investment Focus'){
            focus.push(val[key].split(','));
          }
        }

      });

      //filtering unique values from array
      function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
      }

      this.country = locat.filter(onlyUnique);
      console.log(this.vclists);


      this.metaService.addTags([
        { name: 'keywords', content: vc_name.toString() }
      ]);
    });

  }

  vclists: any = [];
  country: any = [];

  ngOnInit() {
  }

}
