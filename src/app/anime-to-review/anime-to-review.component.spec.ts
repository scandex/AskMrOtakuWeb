import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeToReviewComponent } from './anime-to-review.component';

describe('AnimeToReviewComponent', () => {
  let component: AnimeToReviewComponent;
  let fixture: ComponentFixture<AnimeToReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeToReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeToReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
