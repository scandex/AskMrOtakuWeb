import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRecommenderComponent } from './item-recommender.component';

describe('ItemRecommenderComponent', () => {
  let component: ItemRecommenderComponent;
  let fixture: ComponentFixture<ItemRecommenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRecommenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRecommenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
