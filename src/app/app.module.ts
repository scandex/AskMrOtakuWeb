import { AnimeDataService } from './anime-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimeToReviewComponent } from './anime-to-review/anime-to-review.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemRecommenderComponent } from './item-recommender/item-recommender.component';
import { C1RecommenderComponent } from './c1-recommender/c1-recommender.component';
import { C2RecommenderComponent } from './c2-recommender/c2-recommender.component';
import { MaterialModule } from '@angular/material';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    AnimeToReviewComponent,
    ItemRecommenderComponent,
    C1RecommenderComponent,
    C2RecommenderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [AnimeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
