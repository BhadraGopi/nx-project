import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './examples/formEditor/components/home/home.component';
import { LoginComponent } from './examples/formEditor/components/login/login.component';

import { MyCounterComponent } from './examples/my-counter/my-counter/my-counter.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'counter',
    component: MyCounterComponent,
  },
  {
    path: 'home/:user',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
