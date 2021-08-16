import { Component, OnInit } from '@angular/core';
import {DataStoreService} from "../movies/services/data-store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  model!: string;

  constructor(private dataStoreService:DataStoreService, private router:Router) {}

  ngOnInit(): void {
  }

  clickEvent($event: string | number) {
    this.dataStoreService.choiceItem.next('search')
    this.dataStoreService.searchItem.next($event);

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['popular-movies/search']);
  }
}
