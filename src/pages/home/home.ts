import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CitiesPage } from '../cities/cities';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  skipLogin() {
    this.navCtrl.push(CitiesPage);
  }

}
