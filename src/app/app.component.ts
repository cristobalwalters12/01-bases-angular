import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //aqui se manejan los estados de las apps y se pueden pasar a los componentes
  public title: string = 'mi primera wea';
  public counter: number = 10;

  increasebyone(value: number):void {
    this.counter+=value;
  }
  reset():void {
    this.counter=10;
  }
}
