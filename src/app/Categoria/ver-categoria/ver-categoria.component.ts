import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { Emprendimiento } from 'src/app/Modelo/Emprendimiento';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-ver-categoria',
  templateUrl: './ver-categoria.component.html',
  styleUrls: ['./ver-categoria.component.css']
})
export class VerCategoriaComponent {
  
  idCategoria:any;
  categoria:Categoria;
  emprendimientos:Emprendimiento[];

  constructor(private router:Router,private service:ServicioService, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {this.idCategoria = params.get('idCategoria')})
    this.service.recuperarCategoriaId(this.idCategoria).subscribe(data =>{this.categoria = data});
    this.service.getEmprendimientosPorCategoria(this.idCategoria).subscribe(data => {this.emprendimientos = data});
  }
}
