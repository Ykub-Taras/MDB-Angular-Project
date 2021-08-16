import { Component, OnInit } from '@angular/core';
import {GetMovieDataService} from "../services/get-movie-data.service";
import {DataStoreService} from "../services/data-store.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  page!: number;
  total_pages!:number;

  constructor(private getMovieDataService:GetMovieDataService, private dataStoreService:DataStoreService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.dataStoreService.currentPage.subscribe(value => this.page=value);
    this.dataStoreService.allPages.subscribe(value => this.total_pages=value);
      }

  ngOnInit(): void {
  }



  reloadPage(page:number) {

    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);

    this.dataStoreService.currentPage.next(page);
    this.dataStoreService.currentPage.subscribe(value =>  console.log(value));


  }
}
