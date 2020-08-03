import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {
 curso:Curso = new Curso;
  constructor() { }

  ngOnInit(): void {
  }

}
 