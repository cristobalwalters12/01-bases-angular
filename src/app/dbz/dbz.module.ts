import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
@NgModule({
  declarations: [MainPageComponent, ListaComponent, FormularioComponent, AddCharacterComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
