import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {

  categoria:Categoria;
  nombreCategoria:any;
  form: FormGroup;

  constructor(private router:Router,private service:ServicioService, private route: ActivatedRoute,private formBuilder: FormBuilder){
    
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params =>{this.nombreCategoria = params.get('nombre')});
    this.service.getCategoriaNombre(this.nombreCategoria).subscribe(data =>{this.categoria = data});
    this.validacionesForm();
  }


  validacionesForm(){
    this.form = this.formBuilder.group({
      imagen: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }
  
  EditarCategoria(){
    this.categoria.nombre = this.form.value.nombre;
    this.categoria.descripcion = this.form.value.descripcion;
    this.categoria.imagen = this.form.value.imagen;
    this.service.actualizarCategoria(this.categoria).subscribe(data=>{alert('La categoria fue actualizada con exito')}, err=>{alert('Error en los datos ingresados')})
  }

}
