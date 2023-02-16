import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';
import { Emprendimiento } from '../Modelo/Emprendimiento';
import { Categoria } from '../Modelo/Categoria';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

 
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/ttps-spring';


  loginUsuario(usuario:string, contraseña:string){
    let body = new HttpParams();
    body = body.set('usuario', usuario);
    body = body.set('contraseña', contraseña);
    return this.http.post<Usuario>(this.Url +"/usuario/login",body)
  }

  getUsuarios(){
    return this.http.get<Usuario[]>(this.Url+"/usuario/listarUsuarios")
  }

  altaUsuario(usuario:Usuario){
      return this.http.post<Usuario>(this.Url+"/usuario/registrarUsuario",usuario)
  }

  getUsuarioId(id:number){
    return this.http.get<Usuario>(this.Url+"/usuario/buscarUsuario"+"?idUsuario="+id)
  }

  actualizarUsuario(usuario:Usuario){
    return this.http.put<Usuario> (this.Url+"/usuario/actualizarUsuario",usuario)
  }

  eliminarUsuario(usuario:Usuario){
    return this.http.delete<Usuario>(this.Url+"/usuario/eliminarUsuario"+"?idUsuario="+usuario.id)
  }

  getEmprendimientos(){
    return this.http.get<Emprendimiento[]>(this.Url+"/Emprendimiento/listarEmprendimientos")
  }

  getCategorias(){
    return this.http.get<Categoria[]>(this.Url+"/Categoria/listarCategorias")
  }

  getCategoriaNombre(nombre:String){
    return this.http.get<Categoria>(this.Url+"/Categoria/buscarCategoriaPorNombre"+"?nombre="+nombre)
  }

  altaDeCategoria(categoria:Categoria){
    return this.http.post<Categoria>(this.Url + "/usuario/altaCategoria",categoria)
  }

  getEmprendimientoNombre(nombre:String){
    return this.http.get<Emprendimiento>(this.Url+"/Emprendimiento/buscarEmprendimientoNombre"+"?nombre="+nombre)
  }

}

