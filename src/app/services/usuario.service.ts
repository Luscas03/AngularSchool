import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Usuario } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private conn: string = environment.localDB;
  private colletion: string = "usuario";
  constructor(
    private http: HttpClient,
  ) { }
  public add(usuario: Usuario) {
    //http:localhost/3000
  return this.http.post(this.conn + this.colletion, usuario);
  }
}
