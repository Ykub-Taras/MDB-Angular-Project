import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GetMovieDataService} from "../services/get-movie-data.service";
import {IGenres} from "../../models/i-genres";
import {DataStoreService} from "../services/data-store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IMovie} from "../../models/i-movie";


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genres!: IGenres [];
  movies!: IMovie [];
  id: number | undefined
  // @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor(
    private getMovieDataService: GetMovieDataService
    , private dataStoreService: DataStoreService, private router: Router, private activatedRoute: ActivatedRoute
  ) {    this.getMovieDataService.getGenres().subscribe(({genres}) => this.genres = genres);
    this.getMovieDataService.getDiscover().subscribe(({results}) => this.movies = results);

  }

  ngOnInit(): void {

  }

  navigateToMovie(id: number) {
    this.router.navigate(['discover-movies', id], {});
    this.dataStoreService.idGenre.next(id)
    this.getMovieDataService.getDiscover().subscribe(({results}) => this.movies = results);
  }

}
