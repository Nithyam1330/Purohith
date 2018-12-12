import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { CitiesPage } from '../cities/cities';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { PhotoViewerPage } from '../photo-viewer/photo-viewer';

@Component({
  selector: 'page-purohit-details',
  templateUrl: 'purohit-details.html',
  providers: [LaunchNavigator]
})
export class PurohitDetailsPage {
  purohitInfo: any;
  modalRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber, private launchNavigator: LaunchNavigator,
    private modelCtrl: ModalController,  private platform: Platform, public viewCtrl: ViewController) {
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
      app: this.launchNavigator.APP.GOOGLE_MAPS
    };
    
    this.launchNavigator.navigate(selectedPlace, options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }
  openModel(image) {
    this.modalRef = this.modelCtrl.create(PhotoViewerPage, {
      purohithImage: image
    });
    this.modalRef.present();
  }
}
