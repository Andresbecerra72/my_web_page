import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  $j: any;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }


  // -------------------Metodos-------------------------------------

  toTop(element: string, link: any) {

    if (!element) {
    return;
    }

    // codigo para eliminar la clase active y animar el logo
    if (element === 'Banner') {

      const selectores: any = this.document.getElementsByClassName('nav-item'); // selecciona la clase del elemento HTML

      for (const ref of selectores){ // recorre la lista de clases en el elemento HTML
        ref.classList.remove('active'); // remueve la calse 'working' que es la clase css que pone el icono check
      }

      link.classList.remove('animate__swing');
      setTimeout(() => { // **** Time Delay ********
      link.classList.add('animate__swing');
      }, 300);

    } else {
      this.aplicarCheck(link); // Activa el enlace en la barra de Navegación
    }


    // valida los elementos HTML mas lejanos para hacer le scroll
    if (element === 'Contactanos') {
      this.document.getElementById(`${element}`).scrollIntoView({block: 'center', behavior: 'smooth'});
      return;
      }
    if (element === 'Clientes') {
      this.document.getElementById(`${element}`).scrollIntoView({block: 'center', behavior: 'smooth'});
      return;
      }


      // ejecuta el scroll
    const scrollDiv = this.document.getElementById(`${element}`).offsetTop;
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
