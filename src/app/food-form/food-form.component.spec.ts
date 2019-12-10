import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { foodFormComponent } from './food-form.component';

describe('foodFormComponent', () =>
{
  let component: foodFormComponent;
  let fixture: ComponentFixture<foodFormComponent>;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      declarations: [foodFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(foodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
