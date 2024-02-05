import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { counterModule } from './counter/modules/counter.module';
import { Heroesmodule } from './heroes/modules/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, counterModule, Heroesmodule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
