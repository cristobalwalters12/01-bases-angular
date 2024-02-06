import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>lista works!</p>`,
  styleUrls: ['./lista.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaComponent { }
