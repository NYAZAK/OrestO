import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'zn-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationForm: FormGroup;
  date = new Date();
  timeOptions = ['12:00', '12:30', '13:00', '13:30', '19:00', '19:30', '20:00', '20:30' ];
  peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  client = {firstname: '', lastname: '', tel: '', email: '' };
  constructor(private fb: FormBuilder) { }

  IsScheduleOk =  false;

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.reservationForm = this.fb.group({
        date: new Date(),
        time: '',
        people: 1
    });
  }

  saveReservation(reservationForm) {
    if (this.reservationForm.valid) {
        this.IsScheduleOk = true;
        console.log(this.reservationForm);
    }
  }



  finaliserReservation(form) {
    if (form.valid) {
      console.log(form.value);
      console.log('valid');
    }
  }

}
