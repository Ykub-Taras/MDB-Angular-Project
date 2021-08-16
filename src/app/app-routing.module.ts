import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorizedUserComponent} from "./authorized-user/authorized-user.component";

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'popular-movies'},

  {path:'popular-movies', loadChildren:()=>{
return import('src/app/movies/movies.module').then(value => value.MoviesModule)
}},
  {path:'user', component:AuthorizedUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
