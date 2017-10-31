import { Component, OnInit, NgModule } from '@angular/core';
import { VclistService } from '../../services/vclist.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-vclist',
  templateUrl: './vclist.component.html',
  styleUrls: ['./vclist.component.scss']
})

export class VclistComponent implements OnInit {

  constructor(private vclistService: VclistService, private metaService: Meta) {

    this.vclistService.getVclist().subscribe((data) => {
      this.vclists = data;
      const allowed = ['VC Name'];
      const vc_name = [];

      data.filter(function(val){
        for (var key in val) {
          if(key ==='VC Name'){
            vc_name.push(val[key]); // val1 and etc...
          }
        }
      });

      this.metaService.addTags([
        { name: 'keywords', content: vc_name.toString() }
      ]);
    });

  }

  vclists: any = [];

  ngOnInit() {
    
    
  }


}
