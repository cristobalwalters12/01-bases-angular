import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { DbzService } from './services/dbz.service';
@NgModule({
  declarations: [MainPageComponent, ListaComponent, FormularioComponent],
  imports: [CommonModule,FormsModule],
  exports: [MainPageComponent],
  providers: [DbzService],
})
export class DbzModule {}
