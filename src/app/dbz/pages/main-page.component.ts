import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interfaces';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
    constructor(public DbzService: DbzService) {

   }
}
