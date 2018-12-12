import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-photo-viewer',
  templateUrl: 'photo-viewer.html',
})
export class PhotoViewerPage {

  image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.image = this.navParams.get('purohithImage'); 
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
}
