import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { LandingPage } from '../landing/landing';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
  // tab1Root = 'ReclamationsPage';
  tab1Root = LandingPage;
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }
}