import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {
public users: Usuario[] = [];

  constructor(
    private userService: UsuarioService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.atualizaLista();

  }
  atualizaLista() {
    this.userService.listAllFire().subscribe(
      res => {
        this.users = res;
      }

    )
  }
  edit(id) {
    console.log(id);
    this.router.navigate(["/formUser" , id]);
    
  }
  remove(id, ativo){
    if (confirm("Deseja REALMENTE apagar?"))
    this.userService.removeFire(id, ativo).then(
      res=>{
        this.atualizaLista();
      },
      err=>{
        console.error(err);
        alert("Não foi Possível apagar os dados!");
      }
    );
    this.atualizaLista();
  }
}
