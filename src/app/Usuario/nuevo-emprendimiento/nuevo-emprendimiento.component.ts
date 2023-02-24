import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup;
  
  constructor(private service: ServicioService, private router: Router, private route: ActivatedRoute,private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.idUsuario = params.get('idUsuario') });
    this.validacionesForm();

  }

  validacionesForm(){
    this.form = this.formBuilder.group({
      banner: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      url: ['', [Validators.required]]
    });
  }

  AltaEmprendimiento() {
    this.emprendimiento.nombre = this.form.value.nombre;
    this.emprendimiento.banner = this.form.value.banner;
    this.emprendimiento.descripcion = this.form.value.descripcion;
    this.emprendimiento.url = this.form.value.url;
    this.service.altaEmprendimiento(this.idUsuario, this.emprendimiento).subscribe(data => { alert('Emprendimiento registrado con exito') }, err=> {alert('El nombre del emprendimiento ya se encuentra registrado')});
  }
}
