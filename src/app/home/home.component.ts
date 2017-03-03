import { AnimeDataService } from '../anime-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private animeDataService: AnimeDataService,
    private router: Router) { }

  goToRate(): void {
    let link = ['/animeToReview'];
    this.router.navigate(link);
  }

  init(): void {
    this.animeDataService
      .getId();
  }
  ngOnInit() {
    this.init();
  }

}
