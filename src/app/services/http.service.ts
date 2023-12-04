import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPokemon(){
    const kek: Observable<any> = this.http.get("https://pokeapi.co/api/v2/pokemon/300");
    kek.subscribe(info => console.log(info));
  }
}
