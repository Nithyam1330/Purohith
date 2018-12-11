import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { OmManthraPage } from '../om-manthra/om-manthra';
import { CitiesPage } from '../cities/cities';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  backButton = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private toastCtrl: ToastController) {
    this.platform.registerBackButtonAction(() => {
      console.log(this.navCtrl.getActive().name);
      if (this.navCtrl.getActive().name === 'LandingPage') {
        this.backButton++;
        this.openToast();
        setTimeout(() => {
          this.backButton = 0;
        }, 3000);
        if (this.backButton === 2) {
          this.platform.exitApp();
        }
      } else {
        this.navCtrl.pop();
      }
    })
  }

  openToast() {
    const toast = this.toastCtrl.create({
      message: 'Press again to exit',
      duration: 2000
    });
    toast.present();
  }
  navigateToCitiesPage() {
    this.navCtrl.push(CitiesPage);
  }
  navigateToOmMantra() {
    this.navCtrl.push(OmManthraPage);
  }
}
