import { Component, OnInit } from '@angular/core';
import { Food } from "../food";
import { FoodService } from '../food.service';
import { OrderComponentComponent } from '../order-component/order-component.component';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class foodListComponent implements OnInit
{
  public filteredFoods: Food[];
  public selectedStatus: string;
  public selectedFood: Food;

  private foods: Food[] = [];
  private orders: Food[] = [];

  constructor(
    private foodService: FoodService,
    private orderService: OrderService,
    private router: Router,
    private userService: AuthService
  )
  {
  }

  async ngOnInit(): Promise<void>
  {
    // redirect to home if already logged in 
    if (!this.userService.isLoggedIn)
    {
      this.router.navigate(['/login']);
    }

    this.selectedStatus = '';
    this.foods = await this.foodService.getFoods();

    this.filter();
  }

  onFilterChange(status: string): void
  {
    this.selectedStatus = status;
    this.filter();
  }

  onSelectFood(food: Food): void
  {
    this.selectedFood = food;
  }

  async onFormSubmit(_food: Food): Promise<void>
  {

    const food = {
      "id": _food.id ? _food.id : -1,
      "title": _food.title,
      "imgUrl": _food.imgUrl ? _food.imgUrl : "",
      "description": _food.description ? _food.description : "",
      "category": _food.category ? _food.category : "Eloetel",
      "price": _food.price,
      "is_available": true,
    }
    // console.log("FOOD ", food);

    if (food.id > 0)
    {
      await this.foodService.updateFood(food)
      // this.selectedFood.location = food.location;
      this.selectedFood.title = food.title;
      this.selectedFood.description = food.description;
      this.selectedFood.price = food.price;

    } else
    {
      this.selectedFood.id = Math.floor(Math.random() * 1000000);
      // this.selectedFood.location = food.location;
      this.selectedFood.title = food.title;
      this.selectedFood.description = food.description;
      this.selectedFood.price = food.price;
      // this.selectedFood.status = 'NEW';
      this.foodService.createFood(food)
        .then(createdFood =>
        {
          this.foods.push(createdFood);
        });
    }
    this.selectedFood = null;
  }

  onNewClick(): void
  {
    this.selectedFood = new Food();
  }

  onDeleteClick(id: number)
  {
    this.foodService.deleteFood(id)
      .then(async () =>
      {
        this.selectedFood = null;
        this.foods = await this.foodService.getFoods();
        this.filter();
      })
  }

  private filter(): void
  {
    this.filteredFoods = this.selectedStatus === ''
      ? this.foods
      : this.foods.filter(food => food === food);
  }

  onOrdered(id: Number)
  {
    this.orders.push(this.foods.filter(item => item.id === id)[0]);
    // console.log(this.orders);
    this.orderService.refreshOrders(this.orders);

  }
}
