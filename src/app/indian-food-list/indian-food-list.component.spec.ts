import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianFoodListComponent } from './indian-food-list.component';

describe('IndianFoodListComponent', () => {
  let component: IndianFoodListComponent;
  let fixture: ComponentFixture<IndianFoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianFoodListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
