import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso';
import { Usuario } from 'src/app/models/usuario';
import { CursoService } from 'src/app/services/curso.service';
@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {
  curso: Curso = new Curso;
  constructor(
protected cursoService:CursoService

  ) { }

  ngOnInit(): void {
    this.curso.ativo = true;
  }
  onsubmit(form) {
    console.log("Curso:", this.curso, "Formulário:", form);
    if (form.invalid) {
      alert("Formulário Inválido!");
    }
    else {
      this.cursoService.add(this.curso).subscribe(
        res=>{
          alert("Cadastrado!");
          console.log(res);
          
        },
        err=>{
          alert("Erro ao cadastrar!");
          console.error(err);
          
        }
      )
    
    }


  }
}
