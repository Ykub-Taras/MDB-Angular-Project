import { Component, OnInit } from '@angular/core';
import {IMovieDetails} from "../../models/I-movie-details"
import {ActivatedRoute} from "@angular/router";
import {GetMovieDataService} from "../services/get-movie-data.service";


let id:number

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie!:IMovieDetails

  constructor(
    private activatedRoute:ActivatedRoute,
    private getMovieDataService:GetMovieDataService) {
      id=this.activatedRoute.snapshot.params.id
  }

  ngOnInit(): void {
    this.getMovieDataService.getMovieInfo(id).subscribe(value => this.movie=value)
  }

  back() {
    history.back()
  }
}
