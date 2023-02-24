import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-alta-categoria',
  templateUrl: './alta-categoria.component.html',
  styleUrls: ['./alta-categoria.component.css']
})
export class AltaCategoriaComponent {

  categoria: Categoria = new Categoria();
  form: FormGroup;
  
  constructor(private router:Router,private service:ServicioService,private formBuilder: FormBuilder){
  }

  ngOnInit(){
    this.validacionesForm();
  }

  validacionesForm(){
    this.form = this.formBuilder.group({
      imagen: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }

  AltaCategoria(){
    this.categoria.nombre = this.form.value.nombre;
    this.categoria.descripcion = this.form.value.descripcion;
    this.categoria.imagen = this.form.value.imagen;
    this.service.altaDeCategoria(this.categoria).subscribe(data=>{alert('La categoria fue creada con exito')})
  }

}
