import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { HotelService } from "../../providers/hotel-service";///.....enlaseee de la paginao de los recuerso de hotel
// import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage({
  name: 'page-home',
  segment: 'home',
  priority: 'high'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // list of hotels
  public hotels: any;///////////--------------Variable 
  public isSearchbarOpened = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: NavController, hotelService: HotelService,) {
    this.hotels = hotelService.getAll();//// llamado de los item u objetos 
  }


  // view hotel detail
  viewHotel(hotel) {
    // console.log(hotel.id)
    this.nav.push('page-tours', {  ///Modificada para las ventanas de lugares 
      'id': hotel.id               ///No ay que olvidar agregar el Nav en el contructor 
    });
  }

}
