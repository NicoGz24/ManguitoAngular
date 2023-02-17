import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaCategoriaComponent } from './Categoria/alta-categoria/alta-categoria.component';
import { EditarCategoriaComponent } from './Categoria/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './Categoria/eliminar-categoria/eliminar-categoria.component';
import { VerCategoriaComponent } from './Categoria/ver-categoria/ver-categoria.component';
import { EditarEmprendimientoComponent } from './Emprendimiento/editar-emprendimiento/editar-emprendimiento.component';
import { EliminarEmprendimientoComponent } from './Emprendimiento/eliminar-emprendimiento/eliminar-emprendimiento.component';
import { ListarEmprendimientosComponent } from './Emprendimiento/listar-emprendimientos/listar-emprendimientos.component';
import { VerDonacionesComponent } from './Emprendimiento/ver-donaciones/ver-donaciones.component';
import { VerEmprendimientoComponent } from './Emprendimiento/ver-emprendimiento/ver-emprendimiento.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AltaUsuarioComponent } from './Usuario/alta-usuario/alta-usuario.component';
import { ComprarPlanComponent } from './Usuario/comprar-plan/comprar-plan.component';
import { DonarManguitosComponent } from './Usuario/donar-manguitos/donar-manguitos.component';
import { EditarUsuarioComponent } from './Usuario/editar-usuario/editar-usuario.component';
import { ListarUsuariosComponent } from './Usuario/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './Usuario/login/login.component';
import { NuevoEmprendimientoComponent } from './Usuario/nuevo-emprendimiento/nuevo-emprendimiento.component';
import { PanelAdministradorComponent } from './Usuario/panel-administrador/panel-administrador.component';
import { PanelUsuarioComponent } from './Usuario/panel-usuario/panel-usuario.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'footer', component:FooterComponent},
  {path:'listarEmprendimientos', component:ListarEmprendimientosComponent},
  {path:'login', component:LoginComponent},
  {path:'altaUsuario', component:AltaUsuarioComponent},
  {path:'verEmprendimiento/:nombre', component:VerEmprendimientoComponent},
  {path:'verCategoria/:categoria', component:VerCategoriaComponent},
  {path:'nuevoEmprendimiento', component:NuevoEmprendimientoComponent},
  {path:'altaCategoria', component:AltaCategoriaComponent},
  {path:'editarUsuario', component:EditarUsuarioComponent},
  {path:'panelUsuario' , component:PanelUsuarioComponent},
  {path:'panelAdministrador',component:PanelAdministradorComponent},
  {path:'editarEmprendimiento', component:EditarEmprendimientoComponent},
  {path:'editarCategoria/:nombre', component:EditarCategoriaComponent},
  {path:'listarUsuarios', component:ListarUsuariosComponent},
  {path:'eliminarEmprendimiento', component:EliminarEmprendimientoComponent},
  {path:'eliminarCategoria', component:EliminarCategoriaComponent},
  {path:'verDonaciones' , component:VerDonacionesComponent},
  {path:'donarManguitos', component:DonarManguitosComponent},
  {path:'comprarPlan',component:ComprarPlanComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
