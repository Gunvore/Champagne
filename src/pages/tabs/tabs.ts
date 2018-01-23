import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';


import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  
  constructor(public alertCtrl: AlertController) {

  }
  
  onSwipeLeft(){
    
  }
  
  onSwipeRight(){
    
  }
  
  tapEvent(event){
    
    
    let confirm = this.alertCtrl.create({
      title: 'Êtes vous sure de passer au tour suivant ?',
      message: 'Une fois validé la mois en cours sera simulé et vous ne pourrez plus revenir en arrière.',
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
