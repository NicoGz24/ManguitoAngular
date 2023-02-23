import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { Emprendimiento } from 'src/app/Modelo/Emprendimiento';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-nuevo-emprendimiento',
  templateUrl: './nuevo-emprendimiento.component.html',
  styleUrls: ['./nuevo-emprendimiento.component.css']
})
export class NuevoEmprendimientoComponent {
  emprendimiento: Emprendimiento = new Emprendimiento();
  idUsuario: any

  constructor(private service: ServicioService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.idUsuario = params.get('idUsuario') });
    this.service.getEmprendimientoPorIdUsuario(this.idUsuario).subscribe(data => { this.emprendimiento = data });
  }


  AltaEmprendimiento() {
    this.service.altaEmprendimiento(this.idUsuario, this.emprendimiento).subscribe(data => { alert('Emprendimiento registrado con exito') }, err=> {alert('El nombre del emprendimiento ya se encuentra registrado')});
  }
}
