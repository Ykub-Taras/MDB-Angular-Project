import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./movies/movies.component";
import {GenresComponent} from "./genres/genres.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";

const routes: Routes = [
  {path:'', component: MoviesComponent, pathMatch:'full'},
  {path:'popular-movies/:id/movie/:id', component: MovieDetailsComponent},

  {path:'discover-movies', component: GenresComponent},
  {path:'discover-movies/:id', component:GenresComponent},
  {path:'discover-movies/movie/:id', component:MovieDetailsComponent},
          {path:'discover-movies/:id/movie/:id', component: MovieDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
