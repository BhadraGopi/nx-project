import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { User } from '../../../auth/state/user.model';

@Component({
  selector: 'nx-project-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private routeSub: Subscription,
    private activatedRoute: ActivatedRoute
  ) {}
  user: User;
  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['home']) {
        this.user = params['home'];
      } else {
        alert('User information not found');
      }
    });
  }
}
