import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import  firebase from 'firebase';
import { firebaseConfig } from './credentials';
//import { HomePage } from '../pages/home/home'; <--------Este tipo de enlase es sustituido por la 
//import { LoginPage } from '../pages/login/login';<------Funcion OpenPAge 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;     //<-----El ViewChil es un componente el cual nos ayuda con la Navegacion por identificadores
  rootPage: any = 'page-login'; //<-----El rootPage nos dirife a la pagina que se designara como inicio 


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
    });
  }
  openPage(page) {
    // Restablece el contenido de navegación para tener solo esta página
    // no queremos que el botón Atrás se muestre en este escenario
    this.nav.setRoot(page.component);
  }

  ///Funciones para cambiar de pagina
  /// Es importante saber que que siempre ay que agregar un module.ts en cada pagina creada 
  /// y crear el identificador para cada una para poder ser llamada

  ////--------------------Ejemplo-------------------------

  // @IonicPage({
  //   name: 'page-login',
  //   segment: 'login',
  //   priority: 'high'
  // })


  logout() {
    this.nav.setRoot('page-login');
  }

  // editProfile() {
  //   this.nav.setRoot('page-edit-profile');
  // }
}

