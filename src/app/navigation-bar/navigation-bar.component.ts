import { Component, OnInit } from '@angular/core';
import {DataStoreService} from "../movies/services/data-store.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private dataStoreService:DataStoreService) { }

  ngOnInit(): void {
  }

  setChoiceP() {this.dataStoreService.choiceItem.next('popular');    this.dataStoreService.currentPage.next(1)
  }
  setChoiceD() {this.dataStoreService.choiceItem.next('discover');    this.dataStoreService.currentPage.next(1)
  }
}
