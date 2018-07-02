import { Injectable } from '@angular/core';
import { Food } from '../../models/food.interface';

@Injectable({
  providedIn: 'root'
})
export class PlatsService {

  constructor() { }

  sucree: Food[] = [
    {id: 1, title: 'Rfissa au poulet beldi' , description: 'Poulet, ', price: 10},
    {id: 2, title: 'Pastilla au poisson et aux fruits de mer' , description: '...', price: 12},
    {id: 3, title: 'Hargma ou pieds de veau aux pois chiches et raisin' , description: '...', price: 11.7},
    {id: 4, title: 'Mrouzia à l’agneau et aux raisins secs' , description: '...', price: 13},
  ];


  legume: Food[] = [
    {id: 1, title: 'Poulet roti aux citrons confits et aux olives vertes.' , description: 'Poulet, ', price: 8.5},
    {id: 2, title: 'Couscous aux 7 légumes.' , description: '...', price: 11.5},
    {id: 3, title: 'Marka de boeuf aux carottes et pomme de terre.' , description: '...', price: 12.5},
    {id: 4, title: 'Zaalouk' , description: '...', price: 11.8},
    {id: 5, title: 'Keftas marocaines aux pommes de terre et piment' , description: '...', price: 11.5},
  ];


  dessert: Food[] = [
    {id: 1, title: 'Baklavas marocains légers aux pistaches', description: 'Pistaches, miel, ', price: 16.5},
    {id: 2, title: 'ghoribas' , description: '...', price: 6},
    {id: 3, title: 'cornes de gasel' , description: '...', price: 11.7},
  ];

  getSucree(): Food[] {
    return this.sucree;
  }

  getLegume(): Food[] {
    return this.legume;
  }

  getDessert(): Food[] {
    return this.dessert;
  }



}

