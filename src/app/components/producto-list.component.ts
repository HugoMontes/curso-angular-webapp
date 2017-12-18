import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: '../views/producto-list.html'
})

export class ProductoListComponent{
  public titulo:string;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ){
    this.titulo='Listado de Productos';
  }
  ngOnInit(){
    console.log('Se ha cargado el componente producto-list.component.ts');
  }
}
