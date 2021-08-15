import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataStoreService} from "./data-store.service";

let pageNumber:number;
let langCode:string;
let idGenre:string;
let query:string;

@Injectable({
  providedIn: 'root'
})
export class GetMovieDataService {

private url='https://api.themoviedb.org/3';
private apiKey='?api_key=406f642cd695381dbe8d24a9595d56df';
private page = '&page=';


  constructor(private httpClient:HttpClient, private dataStoreService:DataStoreService) {
    this.dataStoreService.currentPage.subscribe(value => pageNumber=value);
    this.dataStoreService.langCode.subscribe(value => langCode=value);
    this.dataStoreService.idGenre.subscribe(value => idGenre=value);
    this.dataStoreService.searchItem.subscribe(value => query=value);



  }
  getPopular():Observable<any>{return this.httpClient.get<any>(this.url+'/movie/top_rated' + this.apiKey + '&language=' + langCode + this.page + pageNumber)};
  // getPopular = (pageNumber, langCode) ('/movie/top_rated' + apiKey + '&language=' + langCode + page + pageNumber);

  getMovieInfo(id:number):Observable<any>{return this.httpClient.get<any>(this.url+'/movie/' + id + this.apiKey + '&language=' + langCode)};
  // getMovieInfo = (id, langCode) ('/movie/' + id + apiKey + '&language=' + langCode);

  getGenres():Observable<any>{return this.httpClient.get<any>(this.url+'/genre/movie/list'+ this.apiKey + '&language=' + langCode)};
  // getGenres = (langCode) ('/genre/movie/list' + apiKey + '&language=' + langCode);

  getDiscover():Observable<any>{return this.httpClient.get<any>(this.url+'/discover/movie'+ this.apiKey + '&language=' + langCode+ '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + idGenre + '&with_watch_monetization_types=free' + this.page + pageNumber)};
  // getDiscover = (genreId, currentPage, langCode) ('/discover/movie' + apiKey + '&language=' + langCode + '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + genreId + '&with_watch_monetization_types=free' + page + currentPage);

  getSearch():Observable<any>{return this.httpClient.get<any>(this.url+'/search/movie' + this.apiKey + '&language=' + langCode + '&query=' + query + '&page=' + pageNumber + '&include_adult=false')};
// getSearch = (query, langCode, pageNumber) ('/search/movie' + apiKey + '&language=' + langCode + '&query=' + query + '&page=' + pageNumber + '&include_adult=false');
}

