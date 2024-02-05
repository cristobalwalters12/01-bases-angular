import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { HeroComponent } from '../hero/hero.component';

@NgModule({
  declarations: [ListComponent, HeroComponent],
  //aqui se importan los modulos que se necesitan para el funcionamiento en este caso para el ngif  y el ngFor
  imports: [CommonModule],
  providers: [],
  bootstrap: [],
  exports: [ListComponent, HeroComponent],
})
export class Heroesmodule {}
