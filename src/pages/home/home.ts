import { MediaObject, Media} from '@ionic-native/media';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private media:Media) {
  
  }
  playAudio() {

    alert("He")
    
  }

  
  play(){
    alert("hello");
    
  }
}
