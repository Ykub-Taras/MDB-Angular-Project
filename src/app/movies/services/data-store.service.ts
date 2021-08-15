import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  choiceItem :BehaviorSubject<any> = new BehaviorSubject<any>('popular');


  idGenre :BehaviorSubject<any> = new BehaviorSubject<any>('27');

  currentPage :BehaviorSubject<any> = new BehaviorSubject<number>(1);
  allPages :BehaviorSubject<any> = new BehaviorSubject<number>(1);

  langCode :BehaviorSubject<any> = new BehaviorSubject<any>('en-US');

  searchItem :BehaviorSubject<any> = new BehaviorSubject<any>('');


  constructor() { }
}
