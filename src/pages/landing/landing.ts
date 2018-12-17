import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { OmManthraPage } from '../om-manthra/om-manthra';
import { CitiesPage } from '../cities/cities';
import { BackbuttonProvider } from '../../providers/backbutton/backbutton';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  backButton = 0;
  isOnLandingPage = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private toastCtrl: ToastController,
    private backButtonService: BackbuttonProvider) {
    this.backButtonService.getIsOnLandingPage().subscribe(res => {
      this.isOnLandingPage = res;
    });
  }

  ionViewDidEnter() {
    this.backButtonService.setIsOnLandingPage(true);
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
  ionViewDidLeave() {
    this.isOnLandingPage = false;
  }
}
