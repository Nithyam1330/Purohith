import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { LandingPage } from '../landing/landing';
import { ContactPage } from '../contact/contact';
import { ExplorePage } from '../explore/explore';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
  providers: [InAppBrowser]
})

export class TabsPage {
  tab1Root = LandingPage;
  tab4Root = ContactPage;
  tab2Root = ExplorePage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private iab: InAppBrowser) {
  }

  openStories() {
    const options: InAppBrowserOptions = {
      location: 'no'
    }
    this.iab.create('http://www.purohitjimagic.com/blog/', '_self', options);
  }
}