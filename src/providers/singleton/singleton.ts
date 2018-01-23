import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Utils } from '../../providers/utils';

@Injectable()
export class SingletonService {
  public name:string = "deplace";
  public surname:string = "nicolas";
  
  public champs:number = 2000;
  public factory:number[][]=[ [1,1],[1,1] ];
  
  
  public Game = 
    {
        tour: '38',
        money: [1,32,12,4,23,6,123,8],
        champs: {
            superficie: [1,2,3,4,5,6,7,8],
            prix_ha:[2,2,2,3,3,3,2,2]
        },
        copains:['nicolas','marie','gabriel','victoria'],
        ventes:[1,2,3,4,5,6,7,12,32,32,12,8],
        fabrique: [
          {
            machine: '10',
            worker: '10',
            technology: '1',
            type: '1',
            active: true
          },
          {
            machine: '20',
            worker: '20',
            technology: '1',
            type: '2',
            active: true
          }
          
        ],
        amelioration : {
          prod_ha : '1',
          technology_fab: '1'
        }
    };
    
    public Constantes =
    {
      mois: { 1:'janvier',2:'février',3:'mars',4:'avril',5:'mai',6:'juin',7:'juillet',8:'aout',9:'septembre',10:'octobre',11:'novembre',12:'décembre'},
      bouteille: { 1: ["basse","premiere cuvée",1,'1'], 2: ["moyenne","Millesime",3,'2'], 3: ["haute","cuvée prestige",10,'3']}
    }






  
  
  constructor(storage: Storage){
        storage.get('tour').then((val) => { })
    }
 
    GetFullDate(){
      let annee:number = Math.trunc(Number(this.Game.tour) / 12);
      let mois:number = Number(this.Game.tour) - (annee * 12) + 1;
      
      return this.Constantes.mois[mois] + " " + String(annee + 2000);
    }
    
    GetTotalProduction(type){
      let prod:number =0;
      
      this.Game.fabrique.forEach(function(element) {
        if((element.type==type || type=='0') && element.active==true){
          prod+=Utils.calculprod(Number(element.machine),Number(element.worker),Number(element.technology));
        }
      });
      
      return prod;
    }
    
    
    
}