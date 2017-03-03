import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Anime } from './anime';


@Injectable()
export class AnimeDataService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'https://askmrotaku.herokuapp.com/recommendation/';
  //  private heroesUrl = 'http://localhost:8080/recommendation/';

  animes: Anime[];
  id;
  constructor(private http: Http) {
    this.init();
  }

  getAnimeToReview(id: number): Promise<Anime[]> {
    const url = `${this.heroesUrl}animeToReview/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Anime[])
      .catch(this.handleError);
  }

  setPreference(animeId, rate): void {
    const url = `${this.heroesUrl}preference/${this.id}`;
    let params = new URLSearchParams();
    params.set('anime_id', animeId);
    params.set('rating', rate);
    this.http.get(url, { search: params }).toPromise().catch(this.handleError);
  }

  getItemRecommendations(id: number) {
    const url = `${this.heroesUrl}userBased/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Anime[])
      .catch(this.handleError);
  }

  getC1Recommendations(id: number) {
    const url = `${this.heroesUrl}cluster1Based/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Anime[])
      .catch(this.handleError);
  }

  getC2Recommendations(id: number) {
    const url = `${this.heroesUrl}cluster2Based/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Anime[])
      .catch(this.handleError);
  }


  getId(): Promise<number> {
    return Promise.resolve(this.id);
  }

  init(): void {
    const url = `${this.heroesUrl}getTempId`;
    this.http.get(url)
      .toPromise().then(response => this.id = response.text());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
