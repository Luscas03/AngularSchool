import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormUsuarioComponent } from './pages/form-usuario/form-usuario.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { FormCursoComponent } from './pages/form-curso/form-curso.component';
  import { from } from 'rxjs';

const routes: Routes = [
  {
path:"",
redirectTo:"/home", pathMatch:"full"
  },
  {
path:"home",
component: PageHomeComponent
  },
  {
    path: "addUser",
    component: FormUsuarioComponent
  },
  {
    path: "addCursos",
    component: FormCursoComponent,
  },
  {
    path: "formUser/:key",
    component: FormUsuarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
