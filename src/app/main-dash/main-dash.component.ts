import { Component } from '@angular/core';

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent {
  titre = 'Les traditions marocaines';
  cards = [
    { title: 'a la carte', cols: 2, rows: 1 },
    { title: 'couscous', cols: 1, rows: 1 },
    { title: 'tajine', cols: 1, rows: 2 },
    { title: 'pastilla', cols: 1, rows: 1 }
  ];
}
