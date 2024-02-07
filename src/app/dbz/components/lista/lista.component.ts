import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interfaces';
import { EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  @Output()
  onDeletePersonaje: EventEmitter<string> = new EventEmitter();

  @Input()
  //aqui se define el tipo de dato que va a recibir el componente
  //el input es para que el componente padre pueda pasarle datos al componente hijo
  public personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: 'trunks',
      poder: 15000,
    },
  ];
  onDeletedPersonaje(index: string): void {
    this.onDeletePersonaje.emit(index);
  }
}
