import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http) { }

  getFilms(){
     return this.http.get('http://swapi.co/api/films').map(res => res.json());
  }

  getPeople(){
    return this.http.get('http://swapi.co/api/people').map(res => res.json());
  }

  getPlanets(){
    return this.http.get('http://swapi.co/api/planets').map(res => res.json());
  }

}
