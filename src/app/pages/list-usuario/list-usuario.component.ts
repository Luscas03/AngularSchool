import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {
public users: Usuario[] = [];

  constructor(
    private userService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.atualizaLista();

  }
  atualizaLista() {
    this.userService.getAll().subscribe(
      res => {
        this.users = res;
      }

    )
  }
}
