import { TestBed } from '@angular/core/testing';

import { FoodService } from './food.service';

describe('foodService', () =>
{
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () =>
  {
    const service: FoodService = TestBed.get(FoodService);
    expect(service).toBeTruthy();
  });
});
