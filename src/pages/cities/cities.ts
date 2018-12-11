import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotFoundPage } from '../not-found/not-found';
import { LanguageListPage } from '../language-list/language-list';
import { PurohithListPage } from '../purohith-list/purohith-list';


@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})
export class CitiesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToLanguageList() {
    this.navCtrl.push(LanguageListPage, {
      navParams: {
        data: 'Varanasi'
      }
    });
  }

  goToPurohitList(CityName) {
    this.navCtrl.push(PurohithListPage, {
      navParams: {
        key: '',
        cityName: CityName
      }
    })
  }

  goToNotFound() {
    this.navCtrl.push(NotFoundPage);
  }
}
