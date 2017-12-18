import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// Importar el servicio
import { ProductoService } from '../services/producto.service';
// Importar el la clase del modelo Producto
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: '../views/producto-list.html',
  // Inyectar el servicio en el componente
  providers: [ProductoService]
})

export class ProductoListComponent{

  public titulo:string;
  // Definir una propiedad para productos
  public productos:Producto[];

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    // Definir el servicio como atributo en el constructor
    private _productoService:ProductoService
  ){
    this.titulo='Listado de Productos';
  }
  ngOnInit(){
    console.log('Se ha cargado el componente producto-list.component.ts');
    // Mostrar mensaje de ProductoService mediante un alert
    // alert(this._productoService.getProductos());
    this._productoService.getProductos().subscribe(
      result => {
        // Mostrar la respuesta del API
        // console.log(result);
        // Comprobar el estatus
        if(result.code != 200){
          console.log(result);
        }else{
          // Guardar el data en la propiedad productos
          this.productos = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
