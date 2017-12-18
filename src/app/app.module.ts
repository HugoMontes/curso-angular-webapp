import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// Importar los modulos HttpModule y FormsModule
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Importar HomeComponent
import { HomeComponent } from './components/home.component';
// Importar ErrorComponent
import { ErrorComponent } from './components/error.component';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    // Cargar HomeComponent
    HomeComponent,
    // Cargar HomeComponent
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    // Adicionar HttpModule y FormsModule
    FormsModule,
    HttpModule,
    // Adicionar routing
    routing
  ],
  providers: [
    // Adicionar appRoutingProviders
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
