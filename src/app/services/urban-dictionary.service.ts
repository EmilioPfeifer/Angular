import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UrbanDictionaryService {

  constructor( private http: HttpClient ) {

  }

  public define(frase: string): Observable<any> {
    let params: HttpParams = new HttpParams();

    // Fijar parámetro *term
    params = params.set('term', frase);

    // Enviar Solicitud
    return this.http.get('http://api.urbandictionary.com/v0/define', {params: params});
  }
}
