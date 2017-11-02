import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any;
  constructor(public navCtrl: NavController,private hotspot: Hotspot) {

  }

  ionViewDidLoad(){
    this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {

      this.data=networks;
      console.log(".........hotspot..........",JSON.stringify(networks));
    });
  }
}
