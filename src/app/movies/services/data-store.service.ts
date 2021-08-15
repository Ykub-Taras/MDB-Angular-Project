import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  dataItem :BehaviorSubject<any> = new BehaviorSubject<any>('');

  idGenre :BehaviorSubject<any> = new BehaviorSubject<any>('27');

  currentPage :BehaviorSubject<any> = new BehaviorSubject<number>(1);
  allPages :BehaviorSubject<any> = new BehaviorSubject<number>(1);

  langCode :BehaviorSubject<any> = new BehaviorSubject<any>('en-US');

  searchItem :BehaviorSubject<any> = new BehaviorSubject<any>('');


  constructor() { }
}
