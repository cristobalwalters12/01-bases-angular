import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>formulario works!</p>`,
  styleUrls: ['./formulario.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioComponent { }
