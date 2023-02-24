import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup;

  constructor(private service:ServicioService, private router:Router,private route: ActivatedRoute, private formBuilder:FormBuilder){}


  ngOnInit(){
    this.route.paramMap.subscribe(params =>{this.idUsuario = params.get('idUsuario')});
    this.service.getUsuarioId(this.idUsuario).subscribe(data =>{this.usuario = data});
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }


  ActualizarUsuario(){
    this.service.actualizarUsuario(this.usuario).subscribe(data =>{alert('Usuario actualizado con exito')},err=>{alert('Datos ingresados invalidos')})
  }

}
