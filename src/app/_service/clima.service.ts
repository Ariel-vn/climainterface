import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key ="a9b0d240524e2a4adf098acf196997a7";
  
  constructor(private http:HttpClient) { }

  obtenerClima(ciudad:string):Observable<any>{

    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.key }`)
  }
}
