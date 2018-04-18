import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelDatailPage } from './hotel-datail';

@NgModule({
  declarations: [
    HotelDatailPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelDatailPage),
  ],
  exports:[
    HotelDatailPage
  ]  
})
export class HotelDatailPageModule {}
