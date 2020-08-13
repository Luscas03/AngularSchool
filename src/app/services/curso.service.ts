import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment'
import { Curso } from '../models/curso';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private conn: string = environment.localDB;
  private colletion: string = "curso";
  constructor(

    private http: HttpClient,

  ) { }
  public add(curso: Curso) {
    //http:3000 ~ LOCALHOST 
  return this.http.post(this.conn + this.colletion, curso);
  }
  public getAll(){
  return this.http.get<Curso[]>(this.conn + this.colletion)
  }
  public get(id){
    return this.http.get<Curso>(this.conn + this.colletion + "/" + id)
    }
}
