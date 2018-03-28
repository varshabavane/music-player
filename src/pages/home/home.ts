import { MediaObject, Media } from '@ionic-native/media';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  music: MediaObject
  constructor(public navCtrl: NavController, private media: Media) {

  }
  playAudio() {

    alert("He")

  }


  play() {
    alert("hello");
    this.music = this.media.create('/android_asset/www/assets/songs/zalima.mp3')
    this.music.play();
  }
  previous(){
    alert("hello");
  }

  next(){
    alert("next")
  }

  pause(){
    alert("pause")
  }
}
