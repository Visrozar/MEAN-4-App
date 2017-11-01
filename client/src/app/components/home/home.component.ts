import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  showModal: boolean = false;

  ngOnInit() {
  }

  scrollDown() {
    $('html,body').animate({
      scrollTop: $(".cont-1").offset().top
    },
      'slow');
  }

  outsideClick(e) {
    if (e.target.className == "modal") {
      this.showModal = false;
    }
  }

}
