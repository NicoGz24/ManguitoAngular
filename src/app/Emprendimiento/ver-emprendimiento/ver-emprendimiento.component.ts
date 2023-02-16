import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../../Modelo/Categoria';
import { ActivatedRoute, Router } from '@angular/router';
import{ServicioService} from '../../Service/servicio.service';
import { Emprendimiento } from 'src/app/Modelo/Emprendimiento';


@Component({
  selector: 'app-ver-emprendimiento',
  templateUrl: './ver-emprendimiento.component.html',
  styleUrls: ['./ver-emprendimiento.component.css']
})
export class VerEmprendimientoComponent {
  categorias: Categoria[];
  emprendimiento: any;
  nombreEmprendimiento:any;

  constructor(private router:Router,private service:ServicioService, private route: ActivatedRoute){
    this.service.getCategorias().subscribe(data=>{this.categorias=data})
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {this.nombreEmprendimiento = params.get('nombre')})
    this.service.getEmprendimientoNombre(this.nombreEmprendimiento).subscribe(data=>{this.emprendimiento = data})
  }
   
  DonarManguitos(){
    this.router.navigate(["donarManguitos"])
  }
}
