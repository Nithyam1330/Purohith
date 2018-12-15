import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  constructor(private navCtrl: NavController) {
  }

  navigateToCity() {
    this.navCtrl.setRoot(TabsPage);  
  }
}
