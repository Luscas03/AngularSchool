import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-curso',
  templateUrl: './list-curso.component.html',
  styleUrls: ['./list-curso.component.css']
})
export class ListCursoComponent implements OnInit {
  public curso: Curso[] = [];
  constructor(
    private cursoService: CursoService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.atualizaLista();
  }
  atualizaLista() {
    this.cursoService.getAll().subscribe(
      res => {
        this.curso = res;

      }
    )
  }
edit(id){
  console.log(id);
  this.router.navigate(["/formCursos", id]);
  
}
remove(id){
  if(confirm("Deseja Realmente APAGAR?")) {
  this.cursoService.remove(id).subscribe(
    res=> {
      this.atualizaLista();
    },
    err=>{
      console.error(err);
      alert("Não foi possível apagar os dados!");
    }
  );
  this.atualizaLista();
}
}
}
