import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-project-trial-react',
  templateUrl: './trial-react.component.html',
  styleUrls: ['./trial-react.component.css'],
})
export class TrialReactComponent implements OnInit {
  constructor() {
    //do nothing
  }

  ngOnInit(): void {
    console.log("it's working");
  }
}
