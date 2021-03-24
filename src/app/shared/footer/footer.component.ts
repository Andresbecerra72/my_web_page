import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  // variables
  year: string;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

    this.year = new Date().getFullYear().toString();

  }

   // -------------------Metodos-------------------------------------

   toTop( element: string ) {

    if (!element) {
    return;
    }


    const selectores: any = this.document.getElementsByClassName('nav-item'); // selecciona la clase del elemento HTML

    for (const ref of selectores){ // recorre la lista de clases en el elemento HTML
      ref.classList.remove('active'); // remueve la calse 'working' que es la clase css que pone el icono check
    }


    // Switc para activar el enlace en la Barra de Navegación
    switch (element) {

      case 'Banner':

      const logo: any = this.document.getElementsByClassName('navbar-brand'); // retorna un Arreglo

      logo[0].classList.remove('animate__swing');

      setTimeout(() => { // **** Time Delay ********
        logo[0].classList.add('animate__swing');
        }, 300);

      break;

      case 'Nosotros':
        const link1: any = this.document.getElementById('link1'); // retorna un Arreglo

        this.aplicarCheck(link1);

        break;
      case 'Proyectos':
        const link2: any = this.document.getElementById('link2'); // retorna un Arreglo

        this.aplicarCheck(link2);

        break;
      case 'Clientes':
        const link3: any = this.document.getElementById('link3'); // retorna un Arreglo

        this.aplicarCheck(link3);

        break;

      default:
        break;
    }


    // codigo para realizar el Scroll
    if (element === 'Clientes') {
      document.getElementById(`${element}`).scrollIntoView({block: 'center', behavior: 'smooth'});
      return;
      }


    const scrollDiv = document.getElementById(`${element}`).offsetTop;
    window.scrollTo({ top: scrollDiv - 90, behavior: 'smooth'});

    }



      // -------------------------------------------------------------------------
    // metodo para cambiar la clase active en la barra de Navegación
  aplicarCheck(link: any){


    const selectores: any = this.document.getElementsByClassName('nav-item'); // selecciona la clase del elemento HTML

    for (const ref of selectores){ // recorre la lista de clases en el elemento HTML
      ref.classList.remove('active'); // remueve la calse 'working' que es la clase css que pone el icono check
    }

    link.classList.add('active'); // coloca la clase workin (icono check) en la clase que viene como parametro


  }







} // END class
