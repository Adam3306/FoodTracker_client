import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { foodListComponent } from './food-list.component';

describe('foodListComponent', () =>
{
  let component: foodListComponent;
  let fixture: ComponentFixture<foodListComponent>;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      declarations: [foodListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(foodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
