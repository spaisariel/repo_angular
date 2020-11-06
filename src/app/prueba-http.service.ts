import { Injectable } from '@angular/core';
import { Modelo} from './models/modeloDeEjemplo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebaHttpService {
private urlApi = 'https://jsonplaceholder.typicode.com/users';


  constructor(private http: HttpClient) { }

  getModelosDeEjemplo(): Observable<Modelo[]>{
    return this.http.get<Modelo[]>(this.urlApi);
  }
}
