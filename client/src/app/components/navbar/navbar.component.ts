import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private metaService: Meta) { 
    this.metaService.addTags([
      { name: 'Description', content: 'VirtualBiotech is a non-commercial initiative managed by venture capital professionals with the aim to form a free online community for life science investors in Europe.' }
    ]);
   }

  ngOnInit() {
  }

}
