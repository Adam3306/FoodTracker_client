import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})

export class OrderComponentComponent implements OnInit
{
  private orders: any[] = [];
  private total: number;
  private discount: number;
  private isActivated: boolean;

  constructor(private orderService: OrderService, private router: Router, private userService: AuthService)
  {
    this.total = this.orderService.getTotal();
    this.orders = this.orderService.getOrders();
    this.isActivated = false;
    this.discount = 0;
  }

  ngOnInit()
  {
    // redirect to home if already logged in private router: Router,
    if (!this.userService.isLoggedIn)
    {
      this.router.navigate(['/login']);
    }
    this.orderService.getAll();
  }


  order()
  {
    this.orderService.order();
  }

  activate(e: any)
  {
    if (e.target.discount.value == "ingyen")
    {
      this.total = 0;
    }
    else
    {
      this.total *= 10;
    }
  }

  onDeleteClicked(id: number, name: string)
  {
    this.orderService.removeOrder(id, name);
    this.total = this.orderService.getTotal();
    this.orders = this.orderService.getOrders();
  }

}

