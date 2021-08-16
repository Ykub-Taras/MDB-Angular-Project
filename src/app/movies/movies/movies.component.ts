import {Component, Input, OnInit} from '@angular/core';
import {GetMovieDataService} from "../services/get-movie-data.service";
import {IMovie} from "../../models/i-movie";
import {DataStoreService} from "../services/data-store.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
 @Input()  movies!: IMovie[];
statusOfChoice!:string;

  constructor(private getMovieDataService:GetMovieDataService, private dataStoreService:DataStoreService) {
    this.dataStoreService.choiceItem.subscribe(value => this.statusOfChoice=value)
    if(this.statusOfChoice==='popular'){this.getMovieDataService.getPopular().subscribe(({results}) => this.movies = results)}
  }

  ngOnInit(): void {

  }

}
