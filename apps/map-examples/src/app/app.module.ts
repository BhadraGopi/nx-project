import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SimpleSwitchMapComponent } from './components/simple-switch-map/simple-switch-map.component';
import { SimpleFormComponent } from './components/simple-switch-map/simple-form/simple-form.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, SimpleSwitchMapComponent, SimpleFormComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
