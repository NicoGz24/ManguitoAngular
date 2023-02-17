import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUsuariosComponent } from './Usuario/listar-usuarios/listar-usuarios.component';
import { AltaUsuarioComponent } from './Usuario/alta-usuario/alta-usuario.component';
import { EditarUsuarioComponent } from './Usuario/editar-usuario/editar-usuario.component';
import { LoginComponent } from './Usuario/login/login.component';
import { ListarEmprendimientosComponent } from './Emprendimiento/listar-emprendimientos/listar-emprendimientos.component';
import { EditarEmprendimientoComponent } from './Emprendimiento/editar-emprendimiento/editar-emprendimiento.component';
import { EliminarEmprendimientoComponent } from './Emprendimiento/eliminar-emprendimiento/eliminar-emprendimiento.component';
import { NuevoEmprendimientoComponent } from './Usuario/nuevo-emprendimiento/nuevo-emprendimiento.component';
import { AltaCategoriaComponent } from './Categoria/alta-categoria/alta-categoria.component';
import { EditarCategoriaComponent } from './Categoria/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './Categoria/eliminar-categoria/eliminar-categoria.component';
import { VerCategoriaComponent } from './Categoria/ver-categoria/ver-categoria.component';
import { VerEmprendimientoComponent } from './Emprendimiento/ver-emprendimiento/ver-emprendimiento.component';
import{FormsModule} from '@angular/forms';
import { ServicioService } from './Service/servicio.service';
import{HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { VerDonacionesComponent } from './Emprendimiento/ver-donaciones/ver-donaciones.component';
import { DonarManguitosComponent } from './Usuario/donar-manguitos/donar-manguitos.component';
import { ComprarPlanComponent } from './Usuario/comprar-plan/comprar-plan.component';
import { PanelAdministradorComponent } from './Usuario/panel-administrador/panel-administrador.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PanelUsuarioComponent } from './Usuario/panel-usuario/panel-usuario.component'

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuariosComponent,
    AltaUsuarioComponent,
    EditarUsuarioComponent,
    LoginComponent,
    ListarEmprendimientosComponent,
    EditarEmprendimientoComponent,
    EliminarEmprendimientoComponent,
    NuevoEmprendimientoComponent,
    AltaCategoriaComponent,
    EditarCategoriaComponent,
    EliminarCategoriaComponent,
    VerCategoriaComponent,
    VerEmprendimientoComponent,
    HomeComponent,
    VerDonacionesComponent,
    DonarManguitosComponent,
    ComprarPlanComponent,
    PanelAdministradorComponent,
    NavbarComponent,
    FooterComponent,
    PanelUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
