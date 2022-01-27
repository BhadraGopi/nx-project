import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HeroDataService } from './hero-data-service.service';
import { Hero } from './Hero.model';
import { HeroService } from './hero.service';

@Component({
  selector: 'nx-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-data-example';
  loading$!: Observable<boolean>;
  heroes$!: Observable<Hero[]>;
  form!: FormGroup;
  allHeroes$!: Observable<Hero[]>;
  constructor(
    private heroService: HeroService,
    fb: FormBuilder,
    private heroDataService: HeroDataService
  ) {
    this.form = fb.group({
      Heroname: [],
      Id: [],
    });
  }

  ngOnInit(): void {
    this.allHeroes$ = this.heroService.entities$;
    console.log(this.allHeroes$);
    this.loading$ = this.heroService.loading$;
    this.loading$.subscribe((x) => {
      console.log(x);
      if (x) {
        console.log('Your data is being loaded');
      } else {
        console.log('already loaded');
      }
    });
  }
  add(hero: Hero) {
    this.heroService.add(hero);
  }
  delete(hero: Hero) {
    this.heroService.delete(hero.id);
  }

  getHeroes() {
    this.heroService.getAll();
    // this.heroDataService.getAll();
  }

  update(hero: Hero) {
    this.heroService.update(hero);
  }
  btnClick() {
    this.getHeroes();
    console.log(this.allHeroes$);
    if (this.heroService.loaded$) {
      console.log('Your data is loading');
    } else {
      console.log('loaded');
    }
  }
}
