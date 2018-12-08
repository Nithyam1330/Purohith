import { NavController, NavParams, Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ToastController } from 'ionic-angular';

import { LandingPage } from '../landing/landing';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
  providers: [InAppBrowser]
})

export class TabsPage {
  tab1Root = LandingPage;
  tab4Root = ContactPage;
  backButton = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private iab: InAppBrowser, private platform: Platform, private toastCtrl: ToastController) {
    this.platform.registerBackButtonAction(() => {
      console.log(this.navCtrl.getActiveChildNav());
      this.backButton++;
      this.openToast();
      setTimeout(() => {
        this.backButton = 0;
      }, 3000);
      if (this.backButton === 2) {
        this.platform.exitApp();
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

  openStories() {
    const options: InAppBrowserOptions = {
      location: 'no'
    }
    this.iab.create('http://www.purohitjimagic.com/blog/', '_self', options);
  }

}