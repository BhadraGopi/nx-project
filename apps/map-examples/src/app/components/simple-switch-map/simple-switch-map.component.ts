import { Component, OnInit } from '@angular/core';
import { timer, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'nx-project-simple-switch-map',
  templateUrl: './simple-switch-map.component.html',
  styleUrls: ['./simple-switch-map.component.css'],
})
export class SimpleSwitchMapComponent implements OnInit {
  constructor() {
    //do nothing
  }

  ngOnInit(): void {
    console.log('Do nothing');
    timer(0, 5000)
      .pipe(
        switchMap(
          () => interval(2000),
          (outerValue, innerValue, outerIndex, innerIndex) => ({
            outerValue,
            innerValue,
            outerIndex,
            innerIndex,
          })
        )
      )
      .subscribe(console.log);
  }
}
