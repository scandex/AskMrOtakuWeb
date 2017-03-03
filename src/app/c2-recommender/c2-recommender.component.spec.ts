import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2RecommenderComponent } from './c2-recommender.component';

describe('C2RecommenderComponent', () => {
  let component: C2RecommenderComponent;
  let fixture: ComponentFixture<C2RecommenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2RecommenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2RecommenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
