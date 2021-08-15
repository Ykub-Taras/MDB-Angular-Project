import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'popular-movies'},

  {path:'popular-movies', loadChildren:()=>{
return import('src/app/movies/movies.module').then(value => value.MoviesModule)
}}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
