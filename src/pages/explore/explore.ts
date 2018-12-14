import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExploreList } from './explore.model';
import { PurohithListPage } from '../purohith-list/purohith-list';
import { LanguageListPage } from '../language-list/language-list';
import { NotFoundPage } from '../not-found/not-found';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {
  searchQuery: string = '';
  items: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = new ExploreList().cities;
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.cityName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  navigateToParticularCity(city) {
    switch (city.id) {
      case 1:
        this.goToLanguageList(city.cityName);
        break;
      case 2:
        this.goToPurohitList(city.cityName);
        break;
      case 3:
        this.goToPurohitList(city.cityName);
        break;
      case 4:
        this.goToNotFound();
        break;
      case 5:
        this.goToNotFound();
        break;
      case 6:
        this.goToNotFound();
        break;
    }
  }

  goToLanguageList(cityName) {
    this.navCtrl.push(LanguageListPage, {
      navParams: {
        data: cityName
      }
    });
  }

  goToPurohitList(CityName) {
    this.navCtrl.push(PurohithListPage, {
      navParams: {
        key: '',
        cityName: CityName
      }
    })
  }

  ionViewDidLeave(){
    // this.navCtrl.setRoot(ExplorePage);
  }
  goToNotFound() {
    this.navCtrl.push(NotFoundPage);
  }
}
