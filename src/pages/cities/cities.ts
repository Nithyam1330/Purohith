import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PurohithListPage } from '../purohith-list/purohith-list';
import { NotFoundPage } from '../not-found/not-found';


@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})
export class CitiesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.platform.registerBackButtonAction(() => {
    //   this.platform.exitApp();
    // })
  }
  goToPurohithList() {
    this.navCtrl.push(PurohithListPage, {
      navParams: {
        data: 'Varanasi'
      }
    });
  }

  goToNotFound() {
    this.navCtrl.push(NotFoundPage);
  }
  ionViewDidLoad() {
  }

}
