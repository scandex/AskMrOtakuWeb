import { AnimeToReviewComponent } from './anime-to-review/anime-to-review.component';
import { C1RecommenderComponent } from './c1-recommender/c1-recommender.component';
import { C2RecommenderComponent } from './c2-recommender/c2-recommender.component';
import { HomeComponent } from './home/home.component';
import { ItemRecommenderComponent } from './item-recommender/item-recommender.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'animeToReview', component: AnimeToReviewComponent },
  { path: 'userBased', component: ItemRecommenderComponent },
  { path: 'c1Based', component: C1RecommenderComponent },
  { path: 'c2Based', component: C2RecommenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
