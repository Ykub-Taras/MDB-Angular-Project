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

  getMovieDataP():void {
       this.getMovieDataService.getPopular().subscribe(value => {
      this.movies = value.results;
      this.dataStoreService.allPages.next(value.total_pages);
    })};

  getMovieDataS():void {
    this.getMovieDataService.getSearch().subscribe(value => {
      this.movies = value.results;
      this.dataStoreService.allPages.next(value.total_pages);
    })}

  constructor(
    private getMovieDataService:GetMovieDataService,
    private dataStoreService:DataStoreService) {

      this.dataStoreService.choiceItem.subscribe(value => this.statusOfChoice=value)

      switch (this.statusOfChoice) {
        case 'popular':
          this.getMovieDataP();
        break;
        case 'search':
          this.getMovieDataS();
        break;
        default:
    }
  }

  ngOnInit(): void {
  }

}
