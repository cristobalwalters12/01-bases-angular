import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 40;

  // Esto es un getter, que es una propiedad computada.
  // Cada vez que accedas a `capitalizedName`, se ejecutará este código
  // y se devolverá el resultado.
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} tiene ${this.age} años`;
  }

  // son voids porque su proposito es modificar las propiedades de name y age y no necesitan devolver ningun valor
  changeHero(): void {
    this.name = 'spiderman';
  }
  changeAge(): void {
    this.age = 20;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 40;
  }
}
