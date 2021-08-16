import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataStoreService} from "./data-store.service";


@Injectable({
  providedIn: 'root'
})
export class GetMovieDataService {

  pageNumber!: number;
  langCode!: string;
  idGenre!: string;
  query!: string;
  private url = 'https://api.themoviedb.org/3';
  private apiKey = '?api_key=406f642cd695381dbe8d24a9595d56df';
  private page = '&page=';

  constructor(
    private httpClient: HttpClient,
    private dataStoreService: DataStoreService) {
      this.dataStoreService.currentPage.subscribe(value => this.pageNumber = value);
      this.dataStoreService.langCode.subscribe(value => this.langCode = value);
      this.dataStoreService.idGenre.subscribe(value => this.idGenre = value);
      this.dataStoreService.searchItem.subscribe(value => this.query = value);
  }


  getPopular(): Observable<any> {
    return this.httpClient.get<any>
    (this.url + '/movie/top_rated' + this.apiKey + '&language=' + this.langCode + this.page + this.pageNumber)
  };

  getMovieInfo(id: number): Observable<any> {
    return this.httpClient.get<any>
    (this.url + '/movie/' + id + this.apiKey + '&language=' + this.langCode)
  };

  getGenres(): Observable<any> {
    return this.httpClient.get<any>
    (this.url + '/genre/movie/list' + this.apiKey + '&language=' + this.langCode)
  };

  getDiscover(): Observable<any> {
    return this.httpClient.get<any>
    (this.url + '/discover/movie' + this.apiKey + '&language=' + this.langCode + '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + this.idGenre + '&with_watch_monetization_types=free' + this.page + this.pageNumber)
  };

  getSearch(): Observable<any> {
    return this.httpClient.get<any>
    (this.url + '/search/movie' + this.apiKey + '&language=' + this.langCode + '&query=' + this.query + '&page=' + this.pageNumber + '&include_adult=false')
  };
}

//   getPopular(): Observable<IMovie[]> {
//     return this.httpClient.get<IMovie[]>
//     (this.url + '/movie/top_rated' + this.apiKey + '&language=' + this.langCode + this.page + this.pageNumber)
//   };
//
//   getMovieInfo(id: number): Observable<IMovieDetails> {
//     return this.httpClient.get<IMovieDetails>
//     (this.url + '/movie/' + id + this.apiKey + '&language=' + this.langCode)
//   };
//
//   getGenres(): Observable<IGenres[]> {
//     return this.httpClient.get<IGenres[]>
//     (this.url + '/genre/movie/list' + this.apiKey + '&language=' + this.langCode)
//   };
//
//   getDiscover(): Observable<IMovie[]> {
//     return this.httpClient.get<IMovie[]>
//     (this.url + '/discover/movie' + this.apiKey + '&language=' + this.langCode + '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + this.idGenre + '&with_watch_monetization_types=free' + this.page + this.pageNumber)
//   };
//
//   getSearch(): Observable<IMovie[]> {
//     return this.httpClient.get<IMovie[]>
//     (this.url + '/search/movie' + this.apiKey + '&language=' + this.langCode + '&query=' + this.query + '&page=' + this.pageNumber + '&include_adult=false')
//   };
// }
