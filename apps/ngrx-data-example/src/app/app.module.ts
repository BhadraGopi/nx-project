import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { entityConfig } from './entity-metadata';
import { HeroDataService } from './hero-data-service.service';
import {MatSelectModule} from '@angular/material/select';
import { InMemoryDataService } from './in-memory-data.service';
import { NxWelcomeComponent } from './nx-welcome.component';
import {  MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    NgModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule, 
    MatFormFieldModule,
    MatOptionModule, 
    MatSelectModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [HeroDataService],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(
  //   entityDataService: EntityDataService,
  //   heroDataService: HeroDataService
  // ) {
  //   entityDataService.registerService('Hero', heroDataService);
  // }
}
