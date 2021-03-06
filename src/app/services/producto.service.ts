import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';

@Injectable()
export class ProductoService{
  public url:string;
  constructor(
    public _http: Http
  ){
    this.url=GLOBAL.url;
  }
  getProductos(){
    // return 'Respuesta desde ProductoService';
    // Realizar la peticion al servicio REST para obtener los productos
    return this._http.get(this.url+'producto').map(res => res.json());
  }
  // Crear metodo para guardar un producto
  addProducto(producto: Producto){
    // Convertir a un string de json
    let json = JSON.stringify(producto);
    let params = 'json='+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    // Enviar los datos por post(URL, JSON, HEADERS)
    return this._http.post(this.url+'producto',params,{headers:headers}).map(res=>res.json());
  }
}
