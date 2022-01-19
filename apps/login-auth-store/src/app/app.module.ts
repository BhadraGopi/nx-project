import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/home/sign-in/sign-in.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, HomeComponent, SignInComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
