import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';
import { Emprendimiento } from '../Modelo/Emprendimiento';
import { Categoria } from '../Modelo/Categoria';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/ttps-spring';



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


}

