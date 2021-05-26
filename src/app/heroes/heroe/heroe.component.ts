import { Component } from "@angular/core";

@Component({
  selector:'app-heroe',
  templateUrl:'heroe.component.html'
})
export class heroeComponent{
    nombre:string='iron man';
    edad:number=45;
    get nombreCapitalizado(){
      return this.nombre.toUpperCase();
    }
    mostrarHeroe():string{
      return `${this.nombre} - ${this.edad}`;
    }
    cambiarNombre():void{
      this.nombre='Batman';
    }
    cambiarEdad():void{
      this.edad=38;
    }
}
