import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAuxComponent } from './component-aux/component-aux.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponenttwoComponent } from './componenttwo/componenttwo.component';


const routes: Routes = [
 
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOneComponent },
  { path: 'component-two', component: ComponenttwoComponent },
  { path: 'component-aux', component: ComponentAuxComponent, outlet: 'sidebar' },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);