import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { OmManthraPage } from '../om-manthra/om-manthra';
import { CitiesPage } from '../cities/cities';
import { BackbuttonProvider } from '../../providers/backbutton/backbutton';
import { TabsPage } from '../tabs/tabs';

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
      console.log(this.isOnLandingPage);
    });
    // this.platform.registerBackButtonAction(() => {
    //   if (this.isOnLandingPage) {
    //     this.backButton++;
    //     this.openToast();
    //     setTimeout(() => {
    //       this.backButton = 0;
    //     }, 3000);
    //     if (this.backButton === 2) {
    //       this.platform.exitApp();
    //     }
    //   } else {
    //     this.navCtrl.pop();
    //   }
    // })
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
    console.log('view unload');
    this.isOnLandingPage = false;
  }
}
