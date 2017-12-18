import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// Importar el servicio
import { ProductoService } from '../services/producto.service';
@Component({
  selector: 'app-producto-list',
  templateUrl: '../views/producto-list.html',
  // Inyectar el servicio en el componente
  providers: [ProductoService]
})

export class ProductoListComponent{
  public titulo:string;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    // Definirlo como atributo en el constructor
    private _productoService:ProductoService
  ){
    this.titulo='Listado de Productos';
  }
  ngOnInit(){
    console.log('Se ha cargado el componente producto-list.component.ts');
    // Mostrar mensaje de ProductoService mediante un alert
    alert(this._productoService.getProductos());
  }
}
