import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprendimiento } from 'src/app/Modelo/Emprendimiento';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-editar-emprendimiento',
  templateUrl: './editar-emprendimiento.component.html',
  styleUrls: ['./editar-emprendimiento.component.css']
})
export class EditarEmprendimientoComponent {

  emprendimiento:Emprendimiento = new Emprendimiento();
  idEmprendimiento:any;

  constructor(private service:ServicioService, private router:Router,private route: ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(params =>{this.idEmprendimiento = params.get('idEmprendimiento')})
    this.service.getEmprendimientoPorId(this.idEmprendimiento).subscribe(data =>{this.emprendimiento=data})
  }
}
