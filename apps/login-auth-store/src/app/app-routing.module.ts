import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/home/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'signIn',
    component: SignInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
