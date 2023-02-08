import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaCategoriaComponent } from './Categoria/alta-categoria/alta-categoria.component';
import { EditarCategoriaComponent } from './Categoria/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './Categoria/eliminar-categoria/eliminar-categoria.component';
import { VerCategoriaComponent } from './Categoria/ver-categoria/ver-categoria.component';
import { EditarEmprendimientoComponent } from './Emprendimiento/editar-emprendimiento/editar-emprendimiento.component';
import { EliminarEmprendimientoComponent } from './Emprendimiento/eliminar-emprendimiento/eliminar-emprendimiento.component';
import { ListarEmprendimientosComponent } from './Emprendimiento/listar-emprendimientos/listar-emprendimientos.component';
import { VerEmprendimientoComponent } from './Emprendimiento/ver-emprendimiento/ver-emprendimiento.component';
import { AltaUsuarioComponent } from './Usuario/alta-usuario/alta-usuario.component';
import { EditarUsuarioComponent } from './Usuario/editar-usuario/editar-usuario.component';
import { ListarUsuariosComponent } from './Usuario/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './Usuario/login/login.component';
import { NuevoEmprendimientoComponent } from './Usuario/nuevo-emprendimiento/nuevo-emprendimiento.component';

const routes: Routes = [
  {path:'listarUsuarios', component:ListarUsuariosComponent},
  {path:'altaUsuario', component:AltaUsuarioComponent},
  {path:'editarUsuario', component:EditarUsuarioComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevoEmprendimiento', component:NuevoEmprendimientoComponent},
  {path:'editarEmprendimiento', component:EditarEmprendimientoComponent},
  {path:'listarEmprendimientos', component:ListarEmprendimientosComponent},
  {path:'eliminarEmprendimiento', component:EliminarEmprendimientoComponent},
  {path:'verEmprendimiento', component:VerEmprendimientoComponent},
  {path:'altaCategoria', component:AltaCategoriaComponent},
  {path:'editarCategoria', component:EditarCategoriaComponent},
  {path:'eliminarCategoria', component:EliminarCategoriaComponent},
  {path:'verCategoria', component:VerCategoriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
