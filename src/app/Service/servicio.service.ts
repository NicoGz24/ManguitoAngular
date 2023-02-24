import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';
import { Emprendimiento } from '../Modelo/Emprendimiento';
import { Categoria } from '../Modelo/Categoria';
import { Donacion } from '../Modelo/Donacion';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

 
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/ttps-spring';


    //**********SERVICIOS DEL USUARIO**************

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

  altaEmprendimiento(idUsuario:number, empre:Emprendimiento){
    return this.http.post<Emprendimiento>(this.Url+"/usuario/registrarEmprendimiento"+"?idUsuario="+idUsuario,empre);
  }

  //**********SERVICIOS DEL EMPRENDIMIENTO**************

  getEmprendimientos(){
    return this.http.get<Emprendimiento[]>(this.Url+"/Emprendimiento/listarEmprendimientos")
  }

  getEmprendimientosPorCategoria(idCategoria:number){
    return this.http.get<Emprendimiento[]>(this.Url+"/Emprendimiento/filtrarEmprendimientosPorCategoria"+"?idCategoria="+idCategoria);
  }

  getEmprendimientoPorIdUsuario(idUsuario:number){
    return this.http.get<Emprendimiento>(this.Url+"/usuario/recuperarEmprenPorIdUsuario"+"?idUsuario="+idUsuario)
  }

  getEmprendimientoNombre(nombre:String){
    return this.http.get<Emprendimiento>(this.Url+"/Emprendimiento/buscarEmprendimientoNombre"+"?nombre="+nombre)
  }

  getEmprendimientoPorId(idEmprendimiento:number){
    return this.http.get<Emprendimiento>(this.Url+"/Emprendimiento/buscarEmprendimiento"+"?idEmprendimiento="+idEmprendimiento)
  }

  actualizarEmprendimiento(emprendimiento:Emprendimiento){
    return this.http.put<Emprendimiento>(this.Url+"/Emprendimiento/actualizarEmprendimiento",emprendimiento)
  }

  actualizarCategoriasDelEmprendimiento(idEmprendimiento:number, categorias:Categoria[]){
    return this.http.put<Emprendimiento>(this.Url+"/Emprendimiento/actualizarCategoriasDelEmprendimiento"+"?idEmprendimiento="+idEmprendimiento,categorias)
  }

  verDonacionesEmprendimiento(idEmprendimiento:number){
    return this.http.get<Donacion[]>(this.Url+"/Emprendimiento/verDonacionesEmprendimiento"+"?idEmprendimiento="+idEmprendimiento)
  }

  eliminarEmprendimiento(idEmprendimiento:number){
    return this.http.delete<Emprendimiento>(this.Url+"/Emprendimiento/eliminarEmprendimiento"+"?idEmprendimiento="+idEmprendimiento)
  }

//**********SERVICIOS DE CATEGORIA**************

  actualizarCategoria(categoria:Categoria){
    return this.http.put<Categoria>(this.Url+"/Categoria/actualizarCategoria",categoria)
  }

  recuperarCategoriaId(idCategoria:number){
    return this.http.get<Categoria>(this.Url+"/Categoria/recuperarCategoriaId"+"?idCategoria="+idCategoria)
  }

  eliminarCategoria(idCategoria:number){
    return this.http.delete<Categoria>(this.Url+"/Categoria/eliminarCategoria"+"?idCategoria="+idCategoria)
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

}

