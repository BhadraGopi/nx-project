import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponenttwoComponent } from './componenttwo/componenttwo.component';
import { ComponentAuxComponent } from './component-aux/component-aux.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
 
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOneComponent },
  { path: 'component-two', component: ComponenttwoComponent },
  { path: 'component-aux', component: ComponentAuxComponent, outlet: 'sidebar' },

];
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, 
    ComponentOneComponent, ComponenttwoComponent,
    
     ComponentAuxComponent],
  imports: [BrowserModule,
  RouterModule.forRoot(routes)
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
