import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Importar Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductoListComponent } from './components/producto-list.component';
import { ProductoAddComponent } from './components/producto-add.component';

// Definir las rutas
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'producto', component: ProductoListComponent},
  {path: 'crear-producto', component: ProductoAddComponent},
  {path: '**', component: ErrorComponent}
];
// Cargar los servicios necesarios del router para que todas las rutas funcionen
export const appRoutingProviders: any[] = [];
// Adicionar las rutas el proyecto
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
