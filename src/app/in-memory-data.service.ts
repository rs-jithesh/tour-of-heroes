import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dynamight' },
      { id: 13, name: 'Froppy' },
      { id: 14, name: 'Uravity' },
      { id: 15, name: 'Tentacole' },
      { id: 16, name: "Deku" },
      { id: 17, name: 'Grape Man' },
      { id: 18, name: 'Ingenium' },
      { id: 19, name: 'Red Riot' },
      { id: 20, name: 'Lemillion' }
    ];


    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
