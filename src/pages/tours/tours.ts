import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotelService } from "../../providers/hotel-service";///.....enlaseee de la paginao de los recuerso de hotel

@IonicPage({
  name: 'page-tours',
  segment: 'tours',
  priority: 'high'
})
@Component({
  selector: 'page-tours',
  templateUrl: 'tours.html',
})
export class ToursPage {
  // list of hotels
  public hotels: any;///////////--------------Variable
  public isSearchbarOpened =false; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: NavController, hotelService: HotelService) {
    this.hotels = hotelService.getAll();//// llamado de los item u objetos 
  }

  // view hotel detail
  viewHotel(hotel) {
    // console.log(hotel.id)
    this.nav.push('page-hotel-detail', {  ///Modificada para las ventanas de lugares 
      'id': hotel.id               ///No ay que olvidar agregar el Nav en el contructor 
    });
  }

}
