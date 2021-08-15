import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from './movies/movies.component';
import {MovieComponent} from './movie/movie.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {NgMetro4Module} from "ng-metro4";
import {GenresComponent} from './genres/genres.component';
import {PaginationComponent} from "./pagination/pagination.component";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    GenresComponent,
    PaginationComponent
  ],
  exports: [
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent
  ],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        NgMetro4Module,
    ]
})
export class MoviesModule { }
