import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CarComponent } from './car/car.component';
import { reducer } from './car/car.reducer';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, CarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ cars: reducer, router: routerReducer }),
    RouterModule.forRoot([
      {
        path: ':carId',
        component: CarComponent,
      },
    ]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
