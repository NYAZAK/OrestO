import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, filter, catchError } from 'rxjs/operators';
import { Soiree } from '../../models/soiree.interface';
import { Schedule } from '../../models/shedule.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }
  getAllEvents(): Observable<Soiree[]> {
    return this.http
                .get<Schedule>('assets/schedules.json')
                .pipe(
                  map(res => res.events)
                );
  }

  search(term: string): Observable<Soiree[]> {
    const termLowerCase = term.toLocaleLowerCase();
    return this.http
                .get<Schedule>('../assets/schedules.json')
                .pipe(
                  map(res => res.events.filter(evt => evt.title.toLocaleLowerCase()
                  .indexOf(termLowerCase) > -1 || evt.description.toLocaleLowerCase()
                  .indexOf(termLowerCase) > -1))
                );
  }
}
