import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C1RecommenderComponent } from './c1-recommender.component';

describe('C1RecommenderComponent', () => {
  let component: C1RecommenderComponent;
  let fixture: ComponentFixture<C1RecommenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C1RecommenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C1RecommenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
