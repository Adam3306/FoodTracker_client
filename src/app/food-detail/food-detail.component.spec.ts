import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { foodDetailComponent } from './food-detail.component';

describe('foodDetailComponent', () =>
{
  let component: foodDetailComponent;
  let fixture: ComponentFixture<foodDetailComponent>;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      declarations: [foodDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(foodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
