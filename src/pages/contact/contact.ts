import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [CallNumber]
})
export class ContactPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
  }

  call(number) {
    this.callNumber.callNumber(number, true)
      .then(res => { })
      .catch(err => { });
  }
}
