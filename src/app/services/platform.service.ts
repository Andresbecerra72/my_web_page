import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL_API, TOKEN } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(private http: HttpClient) { }


  // metodos
  registrarWebVisitor(visitante: any) {


    const URL = `${URL_API}/visitor`;


    const headers = new HttpHeaders({
      Authorization: TOKEN
        });

    return this.http.post(URL, JSON.stringify(visitante), {headers});


  }



} // END class
