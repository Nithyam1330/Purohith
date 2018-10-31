import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { PurohithListPage } from '../purohith-list/purohith-list';


@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})
export class CitiesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
    this.platform.registerBackButtonAction(() => {
      this.platform.exitApp();
    })
  }
  goToPurohithList() {
    this.navCtrl.push(PurohithListPage, {
      navParams: {
        data: 'Varanasi'
      }
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CitiesPage');
  }

}
