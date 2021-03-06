import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../app/reducers/index';

import { noop, tap } from 'rxjs';

import { AuthState } from '../../../auth/reducers';
import { login } from '../../../auth/state/auth.actions';
import { AuthService } from '../../../auth/state/auth.service';
import { Router } from '@angular/router';
// import { AuthService } from 'app/auth/state/auth.service.ts';

@Component({
  selector: 'nx-project-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: [''],
    });
  }

  ngOnInit(): void {
    console;
  }
  LogUser() {
    const val = this.form.value;
    this.auth
      .login(val.email, val.password)
      .pipe(
        tap((user) => {
          console.log(user);

          this.store.dispatch(login({ user }));
          this.router.navigate(['home', user]);
        })
      )
      .subscribe(noop, () => alert('Login failed'));
  }
}
