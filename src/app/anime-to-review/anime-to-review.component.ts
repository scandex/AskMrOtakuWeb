import { Anime } from '../anime';
import { AnimeDataService } from '../anime-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-anime-to-review',
  templateUrl: './anime-to-review.component.html',
  styleUrls: ['./anime-to-review.component.css']
})
export class AnimeToReviewComponent implements OnInit {
  animes: Anime[];
  id: number;

  constructor(private animeDataService: AnimeDataService,
    private router: Router) {

  }

  getAnime(): void {
    this.animeDataService
      .getAnimeToReview(this.id)
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
