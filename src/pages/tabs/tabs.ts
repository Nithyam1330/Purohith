import { NavController, NavParams, Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private iab: InAppBrowser, private platform: Platform) {
    this.platform.registerBackButtonAction(() => {
      this.platform.exitApp();
    })
  }

  openStories() {
    const options: InAppBrowserOptions = {
      location: 'no'
    }
    this.iab.create('http://www.purohitjimagic.com/blog/', '_self', options);
  }

}