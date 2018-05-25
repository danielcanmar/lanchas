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
import { HttpClientModule } from '@angular/common/http';

//-------------------------- Plugins---------------------------------
import { Calendar } from '@ionic-native/calendar';
import { UserServiceProvider, } from '../providers/user-service';





@NgModule({
  declarations: [
    MyApp,
    ModPagarPage,
    // HomePage, <----- y por ello ya no tiene que ser declarador en el APP.MODULE.TS
    // LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,     
    IonicModule.forRoot(MyApp),

    
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
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
