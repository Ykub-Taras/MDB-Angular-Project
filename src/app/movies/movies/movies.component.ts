import {Component, Input, OnInit} from '@angular/core';
import {GetMovieDataService} from "../services/get-movie-data.service";
import {IMovie} from "../../models/i-movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
 @Input()  movies!: IMovie[];


  constructor(private getMovieDataService:GetMovieDataService) {
  }

  ngOnInit(): void {
    if(!this.movies) {
      console.log('loading');
      this.getMovieDataService.getPopular().subscribe(({results}) => this.movies = results)
    }
  }
}
