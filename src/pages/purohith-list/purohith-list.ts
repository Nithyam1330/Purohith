import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PurohithiList } from './purohith-list.model';
import { PurohitDetailsPage } from '../purohit-details/purohit-details';
import { CitiesPage } from '../cities/cities';

@Component({
  selector: 'page-purohith-list',
  templateUrl: 'purohith-list.html',
})
export class PurohithListPage {
  purohitList: any[] = [];
  wholePurohitList: any[] = [];
  key: string;
  cityName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.key = this.navParams.data.navParams.key;
    this.cityName = this.navParams.data.navParams.cityName;
  }

  ionViewDidLoad() {
      this.initVaranasiList();
  }

  initVaranasiList() {
    this.wholePurohitList = new PurohithiList().list[this.cityName];
    if (this.cityName === 'Varanasi') {
      this.purohitList = this.wholePurohitList.filter(x => x.key === this.key);
    } else {
      this.purohitList = this.wholePurohitList;
    }
  }

  goToPurohitDetail(purohitInfo) {
    this.navCtrl.push(PurohitDetailsPage, {
      data: purohitInfo
    });
  }
  navigateToCity() {
    this.navCtrl.push(CitiesPage);
  }
}
