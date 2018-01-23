import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { FactoryModalPage } from '../factory-modal/factory-modal';

import { SingletonService } from '../../providers/singleton/singleton';
import { Utils } from '../../providers/utils';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    relationship: string = "champs";
    singleValue: number = 0;
    type1:number =0;
    type2:number =0;
    type3:number =0;
    

  constructor(public navCtrl: NavController, public singleton:SingletonService, public modalCtrl: ModalController) {

  }
  
  swipeEvent(event){
   console.log(event); 
  }
  
  GetReadableNumber(num){
    return Utils.readablenumber(num);
  }
  
  GetTotalProduction(type){
    return this.singleton.GetTotalProduction(type);
  }
  
  CalculateProd(k,l,t,active){
    return active ? Utils.calculprod(k,l,t) : 0;
  }
  
  newfactory(event){
    let modal = this.modalCtrl.create(FactoryModalPage, {showBackdrop: true});
    modal.present();
  }

}


