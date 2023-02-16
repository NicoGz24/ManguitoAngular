import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-ver-categoria',
  templateUrl: './ver-categoria.component.html',
  styleUrls: ['./ver-categoria.component.css']
})
export class VerCategoriaComponent {
  
  categoria:any;

  constructor(private router:Router,private service:ServicioService, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {this.categoria = params.get('categoria')})
  }
}
