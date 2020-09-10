import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  $j: any;

  constructor() { }

  ngOnInit(): void {
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






} // END class
