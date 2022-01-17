import { Component, OnInit } from '@angular/core';
import { timer, interval } from 'rxjs';
import { map, merge, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { concatMap } from 'rxjs';
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

    const srcObservable = of(1, 2, 3, 4);
    const innerObservable = of('A', 'B', 'C', 'D');

    srcObservable
      .pipe(
        switchMap((val) => {
          console.log('Source value ' + val);
          console.log('starting new observable');
          return innerObservable;
        })
      )
      .subscribe((ret) => {
        console.log('Recd ' + ret);
      });
    const srcObservableC = of(1, 2, 3, 4);
    const innerObservableC = of('A', 'B', 'C', 'D');

    srcObservableC
      .pipe(
        concatMap((val) => {
          console.log('Source value ' + val);
          console.log('starting new observable');
          return innerObservableC;
        })
      )
      .subscribe((ret) => {
        console.log('Recd Concat ' + ret);
      });

    const srcObservableM = of(1, 2, 3, 4);
    const innerObservableM = of('A', 'B', 'C', 'D');

    srcObservable
      .pipe(
        mergeMap((val) => {
          console.log('Source value ' + val);
          console.log('starting new observable');
          return innerObservable;
        })
      )
      .subscribe((ret) => {
        console.log('Recd M ' + ret);
      });
  }
}
