import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso';
import { Usuario } from 'src/app/models/usuario';
import { CursoService } from 'src/app/services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {
  curso: Curso = new Curso;
  private key:string;
  constructor(
protected cursoService:CursoService,
private activedRouter: ActivatedRoute,
private router:Router



  ) { }

  ngOnInit(): void {
    this.curso.ativo = true;
    this.key = this.activedRouter.snapshot.paramMap.get("key");
    if(this.key) {
      this.cursoService.getFire(this.key).subscribe(
        res=>{
          this.curso = res;
        }
      )
    }
    console.log(this.key);
    
  }
  onsubmit(form) {
    //console.log("Curso:", this.curso, "Formulário:", form);
    if (form.invalid) {
      alert("Formulário Inválido!");
    }
    else {
      if(this.key){
        this.cursoService.updtadeFire(this.curso,this.key).then(
          res=>{
            alert("Atualizado!");
           // console.log(res);
            this.curso = new Curso;
          this.router.navigate([""]);
          },
          err=>{
            alert("Erro ao Atualizar!");
           console.error(err);
            
          }
        )
      }else{
      this.cursoService.addFire(this.curso).then(
        res=>{
          alert("Cadastrado!");
        //  console.log(res);
        this.router.navigate([""]);
        this.curso = new Curso;
        },
        err=>{
          alert("Erro ao cadastrar!");
         // console.error(err);
          
        }
      )}
    
    }


  }
}
