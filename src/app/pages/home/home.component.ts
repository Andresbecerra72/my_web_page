import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

   // variables
   forma: FormGroup;
  //  key  = btoa(btoa('Registrar')); // clave de envio

  constructor(private fb: FormBuilder,
              private platformService: PlatformService) { }

  ngOnInit(): void {
    this.crearFormulario(); // llama el metodo para crear el formulario
  }

  // ---------------Metodos----------------------------

// ---------------------------------
// Este metodo crea el Formulario
crearFormulario() {

  this.forma = this.fb.group({
    // es importante asociar los controles Input
    nombre:        ['', [Validators.required, Validators.minLength(1)]],
    telefono:      ['', [Validators.required, Validators.minLength(1)]],
    correo:        ['', [Validators.required,  Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]]

    });
  }

// metodo para registrar el Visitante en BD
  registrarVisitor() {

    // console.log(this.forma);

    if (this.forma.invalid) { // condicion para saber si el formulario es valido

      // codigo para obtener los controles Input del formulario
      return  Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched(); // marca el input como tocado por el usuario
      });
    }

    // si todo OK

    const visitor = {
       // accion : this.key, // enviar para productivo**
       name : this.forma.controls.nombre.value,
       email : this.forma.controls.correo.value,
       cell : this.forma.controls.telefono.value,
       country: 'NA',
       city: 'NA',
       message: 'NA'

 };


    this.platformService.registrarWebVisitor(visitor)
                        .subscribe( resp => {
                          // console.log(resp);

                           // console.log('HTTP response', res);
                          Swal.fire({
                              title: 'Registro Aceptado',
                              text: JSON.stringify(resp['message']),
                              icon: 'success',
                              confirmButtonText: 'Cerrar'
                            });
                          this.forma.reset();
                            },
                           err => {
                          //   console.log('HTTP Error', err.error);
                             Swal.fire({
                              title: 'Error!',
                              text: JSON.stringify(err.error),
                              icon: 'error',
                              confirmButtonText: 'Cerrar'
                            });
                             this.forma.reset();
                            },
                          // () => console.log('HTTP request completed.')


                        );




  }


} // END
