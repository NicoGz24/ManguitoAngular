import { Component } from '@angular/core';
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

  constructor(private router:Router,private service:ServicioService, private route: ActivatedRoute){
    
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params =>{this.nombreCategoria = params.get('nombre')})
    this.service.getCategoriaNombre(this.nombreCategoria).subscribe(data =>{this.categoria = data})
  }

  EditarCategoria(){
    console.log('nombre = ',this.categoria.nombre)
    this.service.actualizarCategoria(this.categoria).subscribe(data=>{alert('La categoria fue actualizada con exito')})
  }

}
