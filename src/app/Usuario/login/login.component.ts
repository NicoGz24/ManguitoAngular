import { Component } from '@angular/core';
import{ServicioService} from '../../Service/servicio.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  usuario:Usuario=new Usuario();
  nombreUsuario:string;
  password:string;
  constructor(private service:ServicioService, private router:Router){
  }
  
  ngOnInit(){}


  IniciarSesion(){
    this.service.loginUsuario(this.nombreUsuario,this.password).subscribe(data=>{this.usuario = data});
    console.log("datos del usuario "+ this.usuario.nombre);
    this.router.navigate(["panelAdministrador"]);
  }

}
