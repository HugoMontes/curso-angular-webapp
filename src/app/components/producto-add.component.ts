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
  // Definir un atributo de tipo producto
  public producto:Producto;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    // Definir el servicio como atributo en el constructor
    private _productoService:ProductoService
  ){
    this.titulo='Nuevo Productos';
    // Instanciar un objeto producto
    this.producto=new Producto(0,'','',0,'');
  }
  ngOnInit(){
    console.log('Se ha cargado el componente producto-add.component.ts');
  }
  onSubmit(){
    // Mostrar datos del formulario por consola
    console.log(this.producto);
    // Guardar haciendo uso del servicio
    this._productoService.addProducto(this.producto).subscribe(
      response => {
        if(response.code==200){
          // En caso que no exista error redireccionar a producto
          this._router.navigate(['/producto']);
        }else{
          // En caso de error mostrar el response
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
