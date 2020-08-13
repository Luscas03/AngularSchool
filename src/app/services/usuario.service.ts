import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';


import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import { firestore } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private conn: string = environment.localDB;
  private colletion: string = "usuario";
  constructor(
    private http: HttpClient,
    private firedb: AngularFirestore,
    public auth: AngularFireAuth
  ) { }
  public add(usuario: Usuario) {
    //http:localhost/3000
    return this.http.post(this.conn + this.colletion, usuario);
  }
  public getAll() {
    return this.http.get<Usuario[]>(this.conn + this.colletion);
  }
  public get(id) {
    return this.http.get<Usuario>(this.conn + this.colletion + "/" + id);
  }
  public update(usuario: Usuario, key: string) {
    return this.http.put(this.conn + this.colletion + "/" + key, usuario);
  }
  public remove(key) {
    return this.http.delete(this.conn + this.colletion + "/" + key);
  }
  public addFire(usuario: Usuario) {
    return this.auth.createUserWithEmailAndPassword(usuario.email, usuario.pws).then(
      res => {


        return this.firedb.collection<Usuario>(this.colletion).doc(res.user.uid).set(
          {
            nome: usuario.nome,
            email: usuario.email,
            pws: usuario.pws,
            ativo: usuario.ativo
          }
        )
      }
    )
  }
  public getAllFire() {
    return this.firedb.collection<Usuario>(this.colletion).snapshotChanges()
      .pipe(
        map(dados =>
          dados.map(d => ({ key: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      );
  }
  public listAllFire(ativo: boolean = true) {
    return this.firedb.collection<Usuario>(this.colletion, ref => ref.where('ativo', '==', ativo)).snapshotChanges()
      .pipe(
        map(dados =>
          dados.map(d => ({ key: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      );
  }
  public getFire(key) {
    return this.firedb.collection(this.colletion).doc<Usuario>(key).valueChanges();
  }
  public updateFire(usuario: Usuario, key: string) {
    return this.firedb.collection(this.colletion).doc(key).update(usuario);
  }
  public removeFire(key, userativo: boolean) {
    //  return this.firedb.collection(this.colletion).doc(key).delete();

    return this.firedb.collection(this.colletion).doc(key).update({
      ativo: !userativo
    })
  }
  public login(email, senha) {
    return this.auth.signInWithEmailAndPassword(email, senha);

  }
  public logout() {
    return this.auth.signOut();
  }
}
