import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'Configuracion', component: ConfiguracionComponent },
  { path: 'Inventario', component: InventarioComponent },
  { path: 'Productos', component: ProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
