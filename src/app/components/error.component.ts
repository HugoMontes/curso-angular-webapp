import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: '../views/error.html'
})

export class ErrorComponent{
  public titulo:string;
  constructor(){
    this.titulo='Error!! Pagina no encontrada';
  }
  ngOnInit(){
    console.log('Se ha cargado el componente home.component.ts');
  }
}
