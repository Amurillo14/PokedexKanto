import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.baseUrl;        //Url base para los servicios de la PokeApi

  constructor(private http: HttpClient) { }

  getPokemons(index: any){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);     //endpoint que devuelve el listado de los pokemon
  }
}
