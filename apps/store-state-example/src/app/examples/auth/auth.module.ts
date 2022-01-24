import { EffectsModule } from '@ngrx/effects';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../formEditor/components/login/login.component';
import { AuthService } from './state/auth.service';

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'login', component: LoginComponent }],
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // EffectsModule.forFeature(),
    RouterModule.forChild(routes),
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthService],
    };
  }
}
