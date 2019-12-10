import { Injectable } from '@angular/core';
import { Food } from './food';
import { Drink } from './drink';
import { HttpClient } from '@angular/common/http';
import { httpOptions, AuthService } from './auth.service';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService
{
  private url: string = 'http://localhost:8080';
  private orders: any[]
  constructor(private http: HttpClient, private userService: AuthService) 
  {
    this.orders = [];
  }

  getAll(): Promise<any>
  {
    const res = this.http.get<any>(`${this.url}/orders`, httpOptions).toPromise();
    // console.log("res: ", res);
    return res;
  }

  refreshOrders(orders: any[])
  {
    this.orders = this.orders.concat(orders);
  }

  removeOrder(id: number, name: string)
  {
    const newOrders = [];
    for (const order of this.orders)
    {
      if (order.title === name && order.id === id)
      {
        continue;
      }
      else
      {
        newOrders.push(order);
      }
    }

    this.orders = newOrders;
  }

  async order(): Promise<any>
  {
    // orders

    try
    {
      const foods = this.orders.filter(item => item.hasOwnProperty("size_of_drink") === false);
      const drinks = this.orders.filter(item => item.hasOwnProperty("size_of_drink") === true);
      // console.log("FOODS ", foods);
      // console.log("DRINKS ", drinks);
      const res = await this.http.post<any>(`${this.url}/orders`, {
        sumPrice: this.getTotal(),
        created_at: new Date(),
        updated_at: new Date(),
        // guests: [this.userService.user],
        // foods: foods,
        // drinks: drinks,
      }, httpOptions).toPromise();

      // console.log("RES: ", res);
      return res;
    } catch (e)
    {
      // console.log(e);
      return Promise.reject();
    }
  }

  getTotal(): number
  {
    let sum = 0;
    for (const order of this.orders)
    {
      sum += order.price;
    }
    return sum;
  }

  getOrders()
  {
    return this.orders;
  }
}
