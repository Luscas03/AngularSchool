import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario'
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  public user: Usuario = new Usuario;
  public confpws: string = "";
  public key: string;

  constructor(
    protected userService: UsuarioService,
    private activatedRouter: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.user.ativo = true;
    this.key = this.activatedRouter.snapshot.paramMap.get("key");
    if (this.key) {
      this.userService.getFire(this.key).subscribe(
        res => {
          this.user = res;
        }
      )
    }

  }

  onsubmit(form) {
    //console.log("Usuario:", this.user, "Formulario:", form);
    if (form.invalid) {
      alert("Formulário invalido!");
    } else {
      if (this.key) {
        this.userService.updateFire(this.user, this.key).then(
          res => {
            alert("Atualizado!");
            //console.log(res);
            this.user = new Usuario;
            this.router.navigate([""]);
          },
          err => {
            alert("Erro ao atualizar!");
            console.error(err);
          }
        )
      } else {
        this.userService.addFire(this.user).then(
          res => {
            alert("Cadastrado!");
            //console.log(res);
            this.user = new Usuario;
            this.router.navigate([""]);
          },
          err => {
            alert("Erro ao cadastrar!");
            console.error(err);
          }
        )
      }
    }
  }
}