import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SimpleSwitchMapComponent } from './components/simple-switch-map/simple-switch-map.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, SimpleSwitchMapComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
