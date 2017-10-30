import { Component, OnInit, NgModule } from '@angular/core';
import { VclistService } from '../../vclist.service';
import {FilterPipe, SortByPipe} from '../../vclist.pipe';
declare var $: any;

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
  location:any = [];
  investmentFocus:any = [];
  preferedIndication:any = [];
  investmentStage:any = [];

  ngOnInit() {
    this.vclistService.getData().subscribe((data) => {
      console.log("what is in the data ", data);
      this.vclists = data;
      console.log(this.vclists[0]['VC Name']);
    });

    $('.tags').each(function () {
      $(this).text($(this).text().replace(/,/g, '.'));
 });
    
    for (var key in this.vclists) {
    if (this.vclists.hasOwnProperty(key)) {
        console.log(key + " -> " + this.vclists[key]);
    }
}
  }

  uniqueArray2(arr) {
    var a = [];
    for (var i=0, l=arr.length; i<l; i++)
        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
            a.push(arr[i]);
    return a;
}

}
