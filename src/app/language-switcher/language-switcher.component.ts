import { Component, OnInit } from '@angular/core';
import {DataStoreService} from "../movies/services/data-store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  reloadPage() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl])}

  constructor(private dataStoreService:DataStoreService, private router:Router) { }

  ngOnInit(): void {
  }

  setLEn() {this.dataStoreService.langCode.next('en-US'); this.reloadPage()}

  setLUa() {this.dataStoreService.langCode.next('uk-UA'); this.reloadPage()}

  setLRu() {this.dataStoreService.langCode.next('ru-RU'); this.reloadPage()}
}
