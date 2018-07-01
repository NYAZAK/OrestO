import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  table = '../assets/img-content/jay-wennington-table-unsplash.jpg';

  constructor() { }

  ngOnInit() {
  }

}
