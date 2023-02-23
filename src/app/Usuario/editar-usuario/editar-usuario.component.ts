import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  usuario:Usuario = new Usuario();
  idUsuario:any

  constructor(private service:ServicioService, private router:Router,private route: ActivatedRoute){}


  ngOnInit(){
    this.route.paramMap.subscribe(params =>{this.idUsuario = params.get('idUsuario')});
    this.service.getUsuarioId(this.idUsuario).subscribe(data =>{this.usuario = data});
  }


  ActualizarUsuario(){
    this.service.actualizarUsuario(this.usuario).subscribe(data =>{alert('Usuario actualizado con exito')})
    alert('Usuario actualizado con exito')
  }

}
