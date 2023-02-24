import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import { Emprendimiento } from 'src/app/Modelo/Emprendimiento';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-editar-emprendimiento',
  templateUrl: './editar-emprendimiento.component.html',
  styleUrls: ['./editar-emprendimiento.component.css']
})
export class EditarEmprendimientoComponent {
  categorias: Categoria[];
  categoriasEdit: Categoria[];
  emprendimiento: Emprendimiento = new Emprendimiento();
  idEmprendimiento: any;
  idUsuario: any;
  form: FormGroup;

  constructor(private service: ServicioService, private router: Router, private route: ActivatedRoute,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.service.getCategorias().subscribe(data => { this.categorias = data });
    this.route.paramMap.subscribe(params => { this.idUsuario = params.get('idUsuario') });
    this.service.getEmprendimientoPorIdUsuario(this.idUsuario).subscribe(data => { this.emprendimiento = data });
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

  EditarEmprendimiento() {
    this.emprendimiento.nombre = this.form.value.nombre;
    this.emprendimiento.banner = this.form.value.banner;
    this.emprendimiento.descripcion = this.form.value.descripcion;
    this.emprendimiento.url = this.form.value.url;
    this.service.actualizarEmprendimiento(this.emprendimiento).subscribe(data => { alert('Se actualizo el emprendimiento con exito') }, err=>{alert('Datos ingresados invalidos')})
  }

  EliminarEmprendimiento(){
    this.service.eliminarEmprendimiento(this.idEmprendimiento).subscribe(data=>{ alert('Emprendimiento eliminado'),this.router.navigate(["/panelUsuario",this.idUsuario]) })
  }

  }
