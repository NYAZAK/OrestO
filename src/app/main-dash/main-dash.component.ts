import { Component, OnInit } from '@angular/core';
import { PlatsService } from '../services/plats/plats.service';
import {Food} from '../models/food.interface';

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {
  titre = 'Les traditions marocaines';
  cards = [
    // { title: 'a la carte', cols: 2, rows: 1 },
    { title: 'sucrée', cols: 2, rows: 1, id: 'suc' },
    { title: 'salé', cols: 2, rows: 1, id: 'sal' },
    { title: 'deserts', cols: 2, rows: 1, id: 'dess' }
  ];

  legume: Food[];
  sucree: Food[];
  dessert: Food[];

  constructor(private plat: PlatsService) { }

  ngOnInit() {
    this.dessert =   this.plat.getDessert();
    this.sucree =   this.plat.getSucree();
    this.legume =   this.plat.getLegume();
  }
}
