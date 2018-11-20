import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OmManthraPage } from '../om-manthra/om-manthra';
import { CitiesPage } from '../cities/cities';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToCitiesPage() {
    this.navCtrl.push(CitiesPage);
  }
  navigateToOmMantra() {
    this.navCtrl.push(OmManthraPage);
  }
}
