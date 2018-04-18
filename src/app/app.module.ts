import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';   <---------Son sustituidos por el setRoot
// import { LoginPage } from '../pages/login/login';

import { HotelService } from "../providers/hotel-service";
import { PlaceService } from "../providers/place-service";
import { ActivityService } from "../providers/activity-service";
import { CarService } from "../providers/car-service";
import { TripService } from "../providers/trip-service";
import { ModPagarPage } from "../pages/mod-pagar/mod-pagar";

//-------------------------- Plugins---------------------------------
import { Calendar } from '@ionic-native/calendar';

//-----------------------------Firebase--------------------------------
// import { AngularFireModule } from "angularfire";
// import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';


// export const firebaseConfig = {
//   apiKey: "AIzaSyBfWpPuUGneCNVjwY3kOSpRG8U75jvFSbc",
//   authDomain: "bacalarbd.firebaseapp.com",
//   databaseURL: "https://bacalarbd.firebaseio.com",
//   projectId: "bacalarbd",
//   storageBucket: "bacalarbd.appspot.com",
//   messagingSenderId: "497728931125",
// };


@NgModule({
  declarations: [
    MyApp,
    ModPagarPage,
    // HomePage, <----- y por ello ya no tiene que ser declarador en el APP.MODULE.TS
    // LoginPage
  ],
  imports: [
    BrowserModule,     
    IonicModule.forRoot(MyApp),
    // AngularFireModule.initializeApp(firebaseConfig),//<------------import de Angularfirebase
    // AngularFireDatabaseModule,
    // AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModPagarPage,
    // HomePage, <----- y por ello ya no tiene que ser declarador en el APP.MODULE.TS
    // LoginPage
  ],
  providers: [
    Calendar,    
    StatusBar,
    SplashScreen,
    HotelService,
    PlaceService,
    ActivityService,
    CarService,
    TripService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
