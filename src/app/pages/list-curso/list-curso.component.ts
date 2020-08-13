import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-list-curso',
  templateUrl: './list-curso.component.html',
  styleUrls: ['./list-curso.component.css']
})
export class ListCursoComponent implements OnInit {
  public curso: Curso[] = [];
  constructor(
    private cursoService: CursoService
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

}
