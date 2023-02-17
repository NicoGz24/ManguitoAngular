import { Component } from '@angular/core';
import { ServicioService } from '../../Service/servicio.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensajeError: string;
  usuario: Usuario = new Usuario();
  constructor(private service: ServicioService, private router: Router) {
  }

  ngOnInit() { }


  IniciarSesion(nombre: string, password: string) {
    this.service.loginUsuario(nombre, password).subscribe(data => {
      this.usuario = data;
      if (this.usuario.esAdmin == true) {
        this.router.navigate(["panelAdministrador"])
      }
      else {
        if (this.usuario.esAdmin == false) {
          this.router.navigate(["/panelUsuario", this.usuario.id])
        }
        else {
          console.log(this.mensajeError)
          this.mensajeError = 'Usuario o contraseña incorrectos'
        }
      }
    });
  }

}
