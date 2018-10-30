import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PurohithiList } from './purohith-list.model';

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
}
