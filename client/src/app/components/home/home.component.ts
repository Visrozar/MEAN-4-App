import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (window.innerWidth > 1000 && window.innerWidth < 2000) {
      document.getElementById("head").style.height = window.innerHeight - 51 + 'px';
    }
  }

  scrollDown() {
    $('html,body').animate({
      scrollTop: $(".cont-1").offset().top
    },
      'slow');
  }

}
