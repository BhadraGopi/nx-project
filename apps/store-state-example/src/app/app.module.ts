import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MyCounterComponent } from './examples/my-counter/my-counter/my-counter.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './examples/formEditor/components/login/login.component';
import { counterReducer } from './examples/my-counter/count/counter.reducer';
import { AuthService } from './examples/auth/state/auth.service';
import { metaReducers, reducers } from './reducers';
import { AuthModule } from './examples/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },

  { path: 'login', component: LoginComponent },
  {
    path: 'counter',
    component: MyCounterComponent,
  },
];
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, MyCounterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot(),

    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
