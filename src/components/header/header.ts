import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CitiesPage } from '../../pages/cities/cities';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  constructor(private navCtrl: NavController) {
  }

  navigateToCity() {
    this.navCtrl.push(CitiesPage);
  }
}
