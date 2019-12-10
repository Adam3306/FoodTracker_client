import { Injectable } from '@angular/core';
import { Food } from "./food";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService, httpOptions } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService
{
  private foodUrl: string = 'http://localhost:8080/foods';

  constructor(
    private http: HttpClient,
  ) { }

  getFoods(): Promise<Food[]>
  {
    return this.http.get<Food[]>(`${this.foodUrl}`, httpOptions).toPromise();
  }

  getFood(id: number): Promise<Food>
  {
    return this.http.get<Food>(`${this.foodUrl}/${id}`, httpOptions).toPromise();
  }

  createFood(food: Food): Promise<Food>
  {
    return this.http.post<Food>(`${this.foodUrl}`, food, httpOptions).toPromise();
  }

  updateFood(food: Food): Promise<Food>
  {
    return this.http.put<Food>(`${this.foodUrl}/${food.id}`, food, httpOptions).toPromise();
  }

  deleteFood(id): Promise<Food>
  {
    return this.http.delete<Food>(`${this.foodUrl}/${id}`, httpOptions).toPromise();
  }
}


