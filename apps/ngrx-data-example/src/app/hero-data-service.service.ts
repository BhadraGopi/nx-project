import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DefaultDataService,
  HttpUrlGenerator,
  Logger,
  QueryParams,
} from '@ngrx/data';
import { map, Observable } from 'rxjs';
import { Hero } from './Hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroDataService extends DefaultDataService<Hero> {
  private heroesUrl = 'api/heroes';
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Hero', http, httpUrlGenerator);
  }
  override getAll(): Observable<Hero[]> {
    console.log('reached here');
    return this.http.get('api/heroes009').pipe(
      map((data: any) => {
        const heroes: Hero[] = [];

        for (const key in data) {
          heroes.push({ ...data[key], id: key });
        }
        return heroes;
      })
    );
  }
}
