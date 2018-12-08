import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotFoundPage } from '../not-found/not-found';
import { LanguageListPage } from '../language-list/language-list';


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

  goToLanguageList() {
    this.navCtrl.push(LanguageListPage, {
      navParams: {
        data: 'Varanasi'
      }
    });
  }

  goToNotFound() {
    this.navCtrl.push(NotFoundPage);
  }
}
