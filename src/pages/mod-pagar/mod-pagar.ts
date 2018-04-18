import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

@IonicPage({
  name: 'page-mod-pagar'
})
@Component({
  selector: 'page-mod-pagar',
  templateUrl: 'mod-pagar.html',
})
export class ModPagarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrol: ViewController) {
  }
// funcion cerrar del modal
cerrar(){
  this.viewCtrol.dismiss();
}

}
