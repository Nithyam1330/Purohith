import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-purohit-details',
  templateUrl: 'purohit-details.html',
})
export class PurohitDetailsPage {
  purohitInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
    this.purohitInfo = this.navParams.get('data');
    console.log(this.purohitInfo);
  }

  call() {
    this.callNumber.callNumber(this.purohitInfo.phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  ionViewDidLoad() {
  }

}
