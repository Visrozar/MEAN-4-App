import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username;
  role;

  constructor(private router: Router, private authService: AuthService) { }

  showModal = false;
  loginoverlayActive = false;

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
      this.role = profile.user.role;
    });
  }

  gotoLogin() {
    this.loginoverlayActive = false;
    if (this.username) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  gotoRegister() {
    this.loginoverlayActive = false;
    if (this.username) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/register']);
    }
  }

  activateOverlay() {
    if (this.username) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginoverlayActive = true;
    }
  }

  clearData() {
    this.loginoverlayActive = false;
  }

  scrollDown() {
    $('html,body').animate({
      scrollTop: $('.cont-1').offset().top
    },
      'slow');
  }

  outsideClick(e) {
    if (e.target.className === 'modal') {
      this.showModal = false;
    }
  }

}
