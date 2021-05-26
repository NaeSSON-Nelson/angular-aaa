import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './Contador/contador.module';
import { heroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,heroesModule,ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
