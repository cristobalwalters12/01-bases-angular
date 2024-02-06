import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interfaces';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  @Output()
  onDeletePersonaje:EventEmitter<number> = new EventEmitter()

  @Input()
  //aqui se define el tipo de dato que va a recibir el componente
  //el input es para que el componente padre pueda pasarle datos al componente hijo
  public personajes: Personaje[] = [
    {
      nombre: 'trunks',
      poder: 15000,
    },
  ];
  onDeletedPersonaje(index: number): void {
    this.onDeletePersonaje.emit(index)
  }
}
