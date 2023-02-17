import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent {
  usuario:Usuario= new Usuario();

  constructor(private router:Router, private service:ServicioService){}


  RegistrarUsuario(){
    this.service.altaUsuario(this.usuario).subscribe(data =>{alert('Usuario creado con exito')})
  }
}
