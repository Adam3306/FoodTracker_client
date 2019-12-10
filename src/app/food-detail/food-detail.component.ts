import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})

class foodDetailComponent implements OnInit
{
  public food: Food = null;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) { }

  async ngOnInit(): Promise<void>
  {
    const id = +this.route.snapshot.paramMap.get('id');
    const resp = await this.foodService.getFood(id);
    this.food = resp;
  }
}

export { foodDetailComponent };
