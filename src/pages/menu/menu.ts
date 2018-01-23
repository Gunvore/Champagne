import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

import { IntroPage } from '../intro/intro';

@Component({
  templateUrl: 'menu.html'
})

export class MenuPage {
  items = [
    'Nouveau Jeu',
    'Règles du Jeu'
  ];
  
  testi="notworked";

  constructor(private nav : NavController, storage: Storage,public alertCtrl: AlertController) {
      storage.get('tour').then((val) => {
        this.testi=val||"partialy";
        this.items.push('Continuer');
     })
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
    if(item=='Nouveau Jeu'){
      this.nav.push(IntroPage);
    }else if(item=='Continuer'){
      
       let confirm = this.alertCtrl.create({
      title: 'Êtes vous sure de passer au tour suivant ?',
      message: 'Une foi'+this.testi,
      buttons: [
        {
          text: 'OUI',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'NON',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
    
    
    
      
      
      
    }
  }

}