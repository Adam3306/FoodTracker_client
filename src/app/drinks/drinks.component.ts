import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { Drink } from '../drink';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit
{

  public filteredDrinks: Drink[];
  public selectedStatus: string;
  public selectedDrink: Drink;

  private drinks: Drink[] = [];
  private orders: Drink[] = [];

  constructor(
    private drinkService: DrinkService,
    private orderService: OrderService,
    private router: Router,
    private userService: AuthService
  )
  {
  }

  async ngOnInit(): Promise<void>
  {
    // redirect to home if already logged in private router: Router,
    if (!this.userService.isLoggedIn)
    {
      this.router.navigate(['/login']);
    }
    this.selectedStatus = '';
    this.drinks = await this.drinkService.getDrinks();

    this.filter();
  }

  onFilterChange(status: string): void
  {
    this.selectedStatus = status;
    this.filter();
  }

  onSelectDrink(drink: Drink): void
  {
    this.selectedDrink = drink;
  }

  async onFormSubmit(_drink: Drink): Promise<void>
  {

    const drink = {
      "id": _drink.id ? _drink.id : -1,
      "title": _drink.title,
      "imageUrl": _drink.imageUrl ? _drink.imageUrl : "",
      "description": _drink.description ? _drink.description : "",
      "category": _drink.category ? _drink.category : "Eloetel",
      "price": _drink.price,
      "is_available": true,
      "size_of_drink": _drink.size_of_drink ? _drink.size_of_drink : 0,
      "alcohol": _drink.alcohol ? _drink.alcohol : 10,
    }

    // console.log("DRINK ", drink);
    if (drink.id > 0)
    {
      await this.drinkService.updateDrink(drink)
      // this.selectedDrink.location = drink.location;
      this.selectedDrink.title = drink.title;
      this.selectedDrink.description = drink.description;
      this.selectedDrink.price = drink.price;

    } else
    {
      this.selectedDrink.id = Math.floor(Math.random() * 1000000);
      // this.selectedDrink.location = drink.location;
      this.selectedDrink.title = drink.title;
      this.selectedDrink.description = drink.description;
      this.selectedDrink.price = drink.price;
      // this.selectedDrink.status = 'NEW';
      this.drinkService.createDrink(drink)
        .then(createdDrink =>
        {
          this.drinks.push(createdDrink);
        });
    }
    this.selectedDrink = null;
  }


  onNewClick(): void
  {
    this.selectedDrink = new Drink();
  }

  onDeleteClick(id: number)
  {
    this.drinkService.deleteDrink(id)
      .then(async () =>
      {
        this.selectedDrink = null;
        this.drinks = await this.drinkService.getDrinks();
        this.filter();
      })
  }

  private filter(): void
  {
    this.filteredDrinks = this.selectedStatus === ''
      ? this.drinks
      : this.drinks.filter(drink => drink === drink);
  }

  onOrdered(id: Number)
  {
    this.orders.push(this.drinks.filter(item => item.id === id)[0]);
    // console.log(this.orders);
    this.orderService.refreshOrders(this.orders);

  }

}

