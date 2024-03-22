import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_SERVER = 'http://localhost:8080/usuarios/'

  constructor(private http: HttpClient ) { }

  public getAllUsuarios(): Observable<any>{
    return this.http.get(this.API_SERVER );
  }

  public saveUsuario(usuario:any): Observable<any>{
    return this.http.get(this.API_SERVER ,usuario );
  }
}
