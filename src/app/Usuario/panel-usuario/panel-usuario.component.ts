import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprendimiento } from 'src/app/Modelo/Emprendimiento';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent {

  idUsuario:any;
  usuario:Usuario=new Usuario();
  emprendimiento:Emprendimiento = new Emprendimiento();

  constructor(private service:ServicioService, private router:Router,private route: ActivatedRoute){}

  ngOnInit(){
      this.route.paramMap.subscribe(params =>{this.idUsuario = params.get('idUsuario')});
      this.service.getUsuarioId(this.idUsuario).subscribe(data =>{this.usuario = data});
      this.service.getEmprendimientoPorIdUsuario(this.idUsuario).subscribe(data=>{this.emprendimiento=data});
  }
  
  EditarEmprendimiento(){
    this.router.navigate(['editarEmprendimiento',this.emprendimiento.id])
  }

  EditarPerfil(){
    this.router.navigate(['editarUsuario',this.idUsuario])
  }

  NuevoEmprendimiento(){
    this.router.navigate(['nuevoEmprendimiento',this.idUsuario])
  }
}
