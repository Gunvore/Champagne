import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { SingletonService } from '../../providers/singleton/singleton';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

 @ViewChild('barCanvas') barCanvas;
 
    barChart: any;
 
    constructor(public navCtrl: NavController,public singleton:SingletonService) {
 
    }
    
    GetFullDate(){
      return this.singleton.GetFullDate();
    }
 
    ionViewDidLoad() {
 
        this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"],
                datasets: [{
                    label: '# Ventes',
                    data: this.singleton.Game.ventes,
                    backgroundColor: [
                        'rgba(247, 17, 17, 0.2)'
                    ],
                    borderColor: [
                        'rgba(247, 17, 17, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
 

}


}
