import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ModalController } from 'ionic-angular';
import { HotelService } from "../../providers/hotel-service";

//-------------------------- Plugins---------------------------------
import { Calendar } from '@ionic-native/calendar';
import { ModPagarPage } from "../mod-pagar/mod-pagar";

@IonicPage({
  name: 'page-hotel-detail',
  segment: 'hotel-detail/:id',
  priority: 'high'
})
@Component({
  selector: 'page-hotel-datail',
  templateUrl: 'hotel-datail.html',
})
export class HotelDatailPage {
  @ViewChild(Content) content: Content;
  // list of hotels
  param: number;
  public hotel: any;///////////--------------Variable 
  public hotels: any;///////////--------------Variable 
  public startDate: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: NavController, public hotelService: HotelService, public Calendar: Calendar, public modalCtrol: ModalController, ) {
    //this.hotels = hotelService.getAll();//// llamado de los item u objetos
    this.param = this.navParams.get('id');
    this.hotel = this.hotelService.getItem(this.param) ? this.hotelService.getItem(this.param) : this.hotelService.getAll()[0];
    this.hotels = hotelService.getAll();//// llamado de los item u objetos
  }
  // view hotel detail
  viewHotel(hotel) {
    // console.log(hotel.id)
    this.nav.push('page-tours', {  ///Modificada para las ventanas de lugares 
      'id': hotel.id               ///No ay que olvidar agregar el Nav en el contructor 
    });
  }
  openCal() {
    //Calendario
    this.Calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
    this.Calendar.openCalendar(this.startDate)

  }

  pagar() {
    let modal = this.modalCtrol.create(ModPagarPage);
    modal.present();
  }

}
