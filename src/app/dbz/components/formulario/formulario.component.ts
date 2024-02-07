import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interfaces';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  // creamos un evento para que el padre se entere de que se ha creado un nuevo personaje
  @Output()
  //el output es un evento que se dispara cuando se crea un nuevo personaje
  onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();
  public personaje: Personaje = {
    id: uuid(),
    nombre: '',
    poder: 0,
  };

  agregarPersonaje(): void {
    if (this.personaje.nombre.length === 0) return;
    else {
      //se emite el evento para que el padre se entere de que se ha creado un nuevo personaje

      this.onNewPersonaje.emit({ ...this.personaje });
    }

    this.personaje.nombre = '';
    this.personaje.poder = 0;
  }
}
