import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent {
  usuario: Usuario = new Usuario();

  form: FormGroup;

  constructor(private router: Router, private service: ServicioService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }

  RegistrarUsuario() {
    this.usuario.nombre = this.form.value.nombre;
    this.usuario.email = this.form.value.email;
    this.usuario.password = this.form.value.password;
    this.service.altaUsuario(this.usuario).subscribe(data => { alert('Usuario creado con exito') }, err=>{alert('El usuario ya se encuentra registrado')})
  }
}
