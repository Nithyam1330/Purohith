import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [CallNumber, LaunchNavigator]
})
export class ContactPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber, private launchNavigator: LaunchNavigator) {
  }

  call(number) {
    this.callNumber.callNumber(number, true)
      .then(res => { })
      .catch(err => { });
  }

  openMaps(selectedPlace) {
    console.log(selectedPlace);
    let options: LaunchNavigatorOptions = {
      app: this.launchNavigator.APP.GOOGLE_MAPS
    };
    
    this.launchNavigator.navigate(selectedPlace, options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }
}
