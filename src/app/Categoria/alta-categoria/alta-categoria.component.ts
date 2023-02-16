import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-alta-categoria',
  templateUrl: './alta-categoria.component.html',
  styleUrls: ['./alta-categoria.component.css']
})
export class AltaCategoriaComponent {

  categoria: Categoria = new Categoria;

  constructor(private router:Router,private service:ServicioService){
  }

  AltaCategoria(categoria: Categoria){
    this.service.altaDeCategoria(categoria).subscribe(data=>{alert('La categoria fue creada con exito')})
  }

}
