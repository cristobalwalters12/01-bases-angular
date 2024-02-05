import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  //definimos un array de strings
  public heroes: string[] = [
    'spiderman',
    'ironman',
    'hulk',
    'thor',
    'capitan america',
  ];
  public name?: string;

  deleteLastHero(): void {
    this.name = this.heroes.pop();
  }
  resetHeroes(): void {
    this.heroes = [];
  }
  addHero(): void {
    this.heroes.push('nuevo heroe');
  }
  deleteFirstHero(): void {
    this.heroes.shift();
  }
}
