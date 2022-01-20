import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { counterReducer } from './counter.reducer';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MyCounterComponent } from './my-counter/my-counter/my-counter.component';
import { MyMoviesComponent } from './examples/my-movies/my-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    MyCounterComponent,
    MyMoviesComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
