import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Curso } from '../models/curso';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private conn: string = environment.localDB;
  private colletion: string = "curso";
  constructor(

    private http: HttpClient,
    private firedb: AngularFirestore
  ) { }
  public add(curso: Curso) {
    //http:3000 ~ LOCALHOST 
    return this.http.post(this.conn + this.colletion, curso);
  }
  public getAll() {
    return this.http.get<Curso[]>(this.conn + this.colletion);
  }
  public get(id) {
    return this.http.get<Curso>(this.conn + this.colletion + "/" + id);
  }
  public update(curso: Curso, key: string) {
    return this.http.put(this.conn + this.colletion + "/" + key, curso);
  }
  public remove(key) {
    return this.http.delete(this.conn + this.colletion + "/" + key);
  }
  public addFire(curso: Curso) {
    return this.firedb.collection(this.colletion).add(
      {
        nome: curso.nome,
        datainicio: curso.datainicio,
        datatermino: curso.datatermino,
        quanthoras: curso.quanthoras,
        cargahoraria: curso.cargahoraria,
        ativo: curso.ativo

      }
    )
  }
  public getAllFire() {
    return this.firedb.collection<Curso>(this.colletion).snapshotChanges()
      .pipe(
        map(dados =>
          dados.map(d => ({ key: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      );

  }

  public getFire(key) {
return this.firedb.collection(this.colletion).doc<Curso>(key).valueChanges();
  }
public updtadeFire(curso: Curso, key: string){
  return this.firedb.collection(this.colletion).doc(key).update(curso);

}
public removeFire(key){
 return this.firedb.collection(this.colletion).doc(key).delete();
}


}

