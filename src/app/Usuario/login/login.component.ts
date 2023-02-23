import { Component } from '@angular/core';
import { ServicioService } from '../../Service/servicio.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensajeError: string;
  error: boolean = false;
  usuario: Usuario = new Usuario();
  constructor(private service: ServicioService, private router: Router) {
  }

  ngOnInit() { }


  login(form: NgForm) {
    const nombre = form.value.nombre;
    const password = form.value.password;
    this.service.loginUsuario(nombre, password).subscribe(data => {
      this.usuario = data;
      if (this.usuario.esAdmin == true) {
        this.router.navigate(["panelAdministrador"]);
      }
      else
        if (this.usuario.esAdmin == false) {
        this.router.navigate(["/panelUsuario", this.usuario.id]);
      }   
    },
    err =>alert('Los datos ingresados no son validos'))
  }

}
