import { Component, ViewChild, } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

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
  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(
    public nav: NavController,
    public navParams: NavParams,
  ) {
  }
  

  registrar(){  

  }
  

  login() {    
    
    this.nav.setRoot('page-home');  //// Funcion para cambio de pagina 
  }
}


