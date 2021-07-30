import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './Hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  getHeroes(): Observable<Hero[]>{
    // const heroes = of(HEROES);
    return this.httpClient.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number) : Observable<Hero>{
    const hero = HEROES.find(h => h.id === id);
    return of(hero);
  }
  constructor(private messageService : MessageService, private httpClient : HttpClient) { }

  private log (message : string){
    this.messageService.add(`HeroService: Fetched Hero : ${message}`);
  }
}
