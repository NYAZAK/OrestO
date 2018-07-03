import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zn-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {



  numberToDisplay = '';


  standard = {
    firstname: 'Benjamin',
    lastName: 'Glouton',
    role: 'Accueil',
    award: '',
    phoneNumer: '02-99-99-99-01',
  };
  sommelier = {
    firstname: 'David',
    lastName: 'Biraud',
    role: 'Sommelier',
    award: 'Meilleur Ouvrier de France 2002',
    phoneNumer: '02-99-99-99-98',
  };
  boucher = {
    firstname: 'Sébastien',
    lastName: 'Coirier',
    role: 'Boucher',
    award: 'Meilleur Ouvrier de France 2015',
    phoneNumer: '02-99-99-99-97',
  };


  displayBig(event) {
    this.numberToDisplay = event;
  }
  constructor() { }

  ngOnInit() {

  }


}
