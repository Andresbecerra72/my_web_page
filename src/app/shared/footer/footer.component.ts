import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  // variables
  year: string;

  constructor() { }

  ngOnInit(): void {

    this.year = new Date().getFullYear().toString();

  }

   // -------------------Metodos-------------------------------------

   toTop(element: string) {

    if (!element) {
    return;
    }

    if (element === 'Contactanos') {
      document.getElementById(`${element}`).scrollIntoView({block: 'center', behavior: 'smooth'});
      return;
      }
    if (element === 'Clientes') {
      document.getElementById(`${element}`).scrollIntoView({block: 'center', behavior: 'smooth'});
      return;
      }



    const scrollDiv = document.getElementById(`${element}`).offsetTop;
    window.scrollTo({ top: scrollDiv - 90, behavior: 'smooth'});

    }




} //END class
