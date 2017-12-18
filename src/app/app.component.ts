import { Component } from '@angular/core';
// Importar la clase GLOBAL
import { GLOBAL } from './services/global';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Definir las propiedades
  public title = 'Productos Angular';
  public header_color:string;
  // Definir el constructor
  constructor(){
    // Inicializar el valor con el que se tiene en GLOBAL
    this.header_color=GLOBAL.header_color;
  }
}
