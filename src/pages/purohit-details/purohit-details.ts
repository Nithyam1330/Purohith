import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { CitiesPage } from '../cities/cities';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { PhotoViewerPage } from '../photo-viewer/photo-viewer';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-purohit-details',
  templateUrl: 'purohit-details.html',
  providers: [LaunchNavigator]
})
export class PurohitDetailsPage {
  purohitInfo: any;
  modalRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private launchNavigator: LaunchNavigator,
    private modelCtrl: ModalController, public viewCtrl: ViewController, public toastCtrl: ToastController) {
    this.purohitInfo = this.navParams.get('data');
  }

  call() {
    window.open('tel:' + this.purohitInfo.phone);
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
    if (image !== '../../assets/imgs/logo-icon.png') {
      this.modalRef = this.modelCtrl.create(PhotoViewerPage, {
        purohithImage: image
      });
      this.modalRef.present();
    } else {
      this.presentToast();
    }
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'No Image found',
      duration: 2000
    });
    toast.present();
  }
}
