import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// Importar el servicio
import { ProductoService } from '../services/producto.service';
// Importar el la clase del modelo Producto
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto-add',
  templateUrl: '../views/producto-add.html',
  // Inyectar el servicio en el componente
  providers: [ProductoService]
})

export class ProductoAddComponent{

  public titulo:string;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    // Definir el servicio como atributo en el constructor
    private _productoService:ProductoService
  ){
    this.titulo='Nuevo Productos';
  }
  ngOnInit(){
    console.log('Se ha cargado el componente producto-add.component.ts');
  }
}
