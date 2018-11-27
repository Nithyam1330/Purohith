import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { CitiesPage } from '../cities/cities';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@Component({
  selector: 'page-purohit-details',
  templateUrl: 'purohit-details.html',
  providers: [LaunchNavigator]
})
export class PurohitDetailsPage {
  purohitInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber, private launchNavigator: LaunchNavigator) {
    this.purohitInfo = this.navParams.get('data');
  }

  call() {
    this.callNumber.callNumber(this.purohitInfo.phone, true)
      .then(res => { })
      .catch(err => { });
  }
  navigateToCity() {
    this.navCtrl.push(CitiesPage);
  }

  openMaps(selectedPlace) {
    let options: LaunchNavigatorOptions = {
      // start: selectedPlace,
      app: this.launchNavigator.APP.GOOGLE_MAPS
    };
    
    this.launchNavigator.navigate(selectedPlace, options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }
}
