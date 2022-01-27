import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { appInit } from './car/car.action';
import { selectCars } from './car/car.selectors';
@Component({
  selector: 'nx-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'router-store-selectors';
  constructor(private store: Store) {}
  cars$ = this.store.pipe(select(selectCars));
  ngOnInit(): void {
    this.store.dispatch(
      appInit({
        cars: [
          { id: '1', make: 'ford', model: 'mustang', year: '2005' },
          { id: '2', make: 'ford', model: 'mustang', year: '1987' },
          { id: '3', make: 'ford', model: 'mustang', year: '1976' },
        ],
      })
    );
  }
}
