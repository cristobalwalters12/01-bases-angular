import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interfaces';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private DbzService: DbzService) {}
  get personajes(): Personaje[] {
    return [...this.DbzService.personajes];
  }
  nuevoPersonaje(personaje: Personaje) {
    this.DbzService.onNewPersonaje(personaje);
  }
  eliminarPersonaje(id: string) {
    this.DbzService.onDeletePersonaje(id);
  }
}
