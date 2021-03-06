import { Component, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-om-manthra',
  templateUrl: 'om-manthra.html',
  providers: [NativeAudio]
})
export class OmManthraPage implements OnDestroy {

  isPlayMode = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadComplex('omManthra', 'assets/audio/om2.mp3', 1, 1, 0).then(res => {
    });
  }

  playAudio() {
    this.nativeAudio.loop('omManthra');
    this.isPlayMode = true;
  }

  stopAudio() {
    this.isPlayMode = false;
    this.nativeAudio.stop('omManthra');
  }

  unloadAudio() {
    this.nativeAudio.unload('omManthra');
  }
  ngOnDestroy() {
    this.stopAudio();
    this.unloadAudio();
  }

  ionViewDidLeave(){
    this.stopAudio();
    this.unloadAudio();
  }
}
