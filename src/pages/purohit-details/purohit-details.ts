import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { CitiesPage } from '../cities/cities';

@Component({
  selector: 'page-purohit-details',
  templateUrl: 'purohit-details.html',
})
export class PurohitDetailsPage {
  purohitInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
    this.purohitInfo = this.navParams.get('data');
  }

  call() {
    this.callNumber.callNumber(this.purohitInfo.phone, true)
      .then(res => {})
      .catch(err => {});
  }
  navigateToCity() {
    this.navCtrl.push(CitiesPage);
  }
  ionViewDidLoad() {
  }

}
