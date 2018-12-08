import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../../pages/landing/landing';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  constructor(private navCtrl: NavController) {
  }

  navigateToCity() {
    this.navCtrl.push(LandingPage);
  }
}
