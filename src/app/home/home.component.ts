import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  table = '../assets/img-content/jay-wennington-table-unsplash.jpg';

  titre = 'la gastronomie marocaine';
  soustitre = 'Les petits plats des grands pays, un article comparatif';
  constructor() { }

  ngOnInit() {
  }

}
