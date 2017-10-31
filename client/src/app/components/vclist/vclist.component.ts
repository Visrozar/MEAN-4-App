import { Component, OnInit, NgModule } from '@angular/core';
import { VclistService } from '../../services/vclist.service';

@Component({
  selector: 'app-vclist',
  templateUrl: './vclist.component.html',
  styleUrls: ['./vclist.component.scss']
})

export class VclistComponent implements OnInit {

  constructor(private vclistService: VclistService) { }

  vclists: any = [];

  ngOnInit() {
    this.vclistService.getVclist().subscribe((data) => {
      this.vclists = data;
    });
  }

}
