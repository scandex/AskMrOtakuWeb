import { Anime } from '../anime';
import { AnimeDataService } from '../anime-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c2-recommender',
  templateUrl: './c2-recommender.component.html',
  styleUrls: ['./c2-recommender.component.css']
})
export class C2RecommenderComponent implements OnInit {

  animes: Anime[];
  id: number;
  constructor(private animeDataService: AnimeDataService,
    private router: Router) { }

  getAnime(): void {
    this.animeDataService
      .getC2Recommendations(this.id)
      .then(animes => this.animes = animes);
  }

  getId(): void {
    this.animeDataService
      .getId()
      .then(id2 => { this.id = id2; this.getAnime(); });
  }

  setPreference(anid: number, rate: number): void {
    this.animeDataService.setPreference(anid, rate);
  }

  ngOnInit() {
    this.getId();
  }

}
