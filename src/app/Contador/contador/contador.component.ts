import { Component } from "@angular/core";

@Component({
  selector:'app-contador',
  template:`
  <h1>{{titulo}}</h1>
<h3>EL NUMERO ACUMULADO ES: {{numero}}</h3>
<button (click)="acumular(base);">+5</button>

<span>{{base}}</span>

<button (click) ="acumular(-base)">-5</button>
`
})
export class contadorComponent{

  titulo: string = 'CONTADOR APP';
  numero: number=10;
  base  : number=5;
  acumular(valor:number){
    this.numero+=valor;
  }
}
