import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { MenuPage } from '../menu/menu';

import { SingletonService } from '../../providers/singleton/singleton';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the IntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {


slides = [
    {
      title: "Bienvenue sur MyChampagneCompany !",
      description: "Chez <b>MyChampagneCompany</b> vous aller diriger une entreprise de ",
      image: "../assets/img/champagne.jpg",
    },
    {
      title: "Fabriquer mes bouteilles ?",
      description: "La <b>Fabrication du champagne</b> est une étape importante dans la gestion de votre maison. Les unités de production permettent de créer vos bouteilles.",
      image: "../assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Vendre ma production ?",
      description: "La <b>production</b> de bouteilles est une étape importante dans le cycle de vie de votre entreprise. Avec le raisoin issue de vos récolte vous allez pouvoir fabriquer de bouteilles dans des usines.",
      image: "../assets/img/ica-slidebox-img-3.png",
    }
  ];
  

  
  constructor(public navCtrl: NavController, public navParams: NavParams,public singleton:SingletonService,public storage: Storage) {
    
    singleton.name = "testicouille";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }
  
  startbuton(){
         this.storage.set('tour', '1');
        this.navCtrl.push(TabsPage);
  }
  
   menubuton(){
        this.navCtrl.push(MenuPage);
  }

}
