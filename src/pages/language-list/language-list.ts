import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LanguageList } from './language-list.model';
import { PurohithListPage } from '../purohith-list/purohith-list';

@Component({
  selector: 'page-language-list',
  templateUrl: 'language-list.html',
})
export class LanguageListPage {
  languageInfo: string;
  languages: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.languageInfo = this.navParams.data.navParams.data;
    this.languages = new LanguageList().languages;
  }

  navigateToPurohitList(key) {
    this.navCtrl.push(PurohithListPage, {
      navParams: {
        key: key
      }
    });
  }
}
