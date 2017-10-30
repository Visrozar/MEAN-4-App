import { Component, OnInit, NgModule } from '@angular/core';
import { VclistService } from '../../vclist.service';
import {FilterPipe, SortByPipe} from '../../vclist.pipe'

@Component({
  selector: 'app-vclist',
  templateUrl: './vclist.component.html',
  styleUrls: ['./vclist.component.scss']
})

@NgModule({
  declarations: [ FilterPipe, SortByPipe ],
})

export class VclistComponent implements OnInit {

  constructor(private vclistService:VclistService) { }

  vclists:any = [];

  ngOnInit() {
    this.vclistService.getData().subscribe((data) => {
      console.log("what is in the data ", data);
      this.vclists = data;
      console.log(this.vclists[0]['VC Name']);
    });
  }

}
