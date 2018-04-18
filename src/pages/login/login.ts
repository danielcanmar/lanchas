import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HomePage } from '../home/home';

@IonicPage({
  name: 'page-login',
  segment: 'login',
  priority: 'high'
})

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  login() {
    this.nav.setRoot('page-home');  //// Funcion para cambio de pagina 
  }
}