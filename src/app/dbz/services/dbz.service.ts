import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interfaces';
@Injectable({providedIn: 'root'})
export class DbzService {
  public personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  onNewPersonaje(personaje: Personaje): void {
    this.personajes.push(personaje);

  }
  onDeletePersonaje(index: number): void {
    this.personajes.splice(index, 1);
  }

}
