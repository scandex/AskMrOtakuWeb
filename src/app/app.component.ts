import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  navItems = [
    { name: 'Home', route: 'home' },
    { name: 'Anime Rating', route: 'animeToReview' },
    { name: 'User Based Recommendations', route: 'userBased' },
    { name: 'Cluster 1 Recommendationse', route: 'c1Based' },
    { name: 'Cluster 2 Recommendations', route: 'c2Based' },
  ];

}
