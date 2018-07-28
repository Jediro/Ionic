import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPage } from '../new/new';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  variable : string = "Por defecto";
  constructor(public navCtrl: NavController) {

  }

  launchNewPage() {
    this.navCtrl.push(NewPage)
  }
}
