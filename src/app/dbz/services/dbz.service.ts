import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interfaces';
import { v4 as uuid } from 'uuid';
@Injectable({ providedIn: 'root' })
export class DbzService {
  public personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 15000,
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  onNewPersonaje(personaje: Personaje): void {
    //el spread reparte todos los atributos del objeto personaje y le añade un id
    const newPersonaje: Personaje = { ...personaje, id: uuid() };
    this.personajes.push(newPersonaje);
  }

  onDeletePersonaje(id: string): void {
    this.personajes = this.personajes.filter(
      (personaje) => personaje.id !== id
    );
  }
}
