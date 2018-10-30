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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.initVaranasiList();
  }
  initVaranasiList() {
    this.purohitList = new PurohithiList().list;
  }

  goToPurohitDetail() {
    this.navCtrl.push(PurohitDetailsPage);
  }
  navigateToCity() {
    this.navCtrl.push(CitiesPage);
  }
}
