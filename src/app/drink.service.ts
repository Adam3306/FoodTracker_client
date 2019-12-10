import { Injectable } from '@angular/core';
import { Drink } from "./drink";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService, httpOptions } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DrinkService
{
  private drinkUrl: string = 'http://localhost:8080/drinks';

  constructor(
    private http: HttpClient,
  ) { }

  getDrinks(): Promise<Drink[]>
  {
    return this.http.get<Drink[]>(`${this.drinkUrl}`, httpOptions).toPromise();
  }

  getDrink(id: number): Promise<Drink>
  {
    return this.http.get<Drink>(`${this.drinkUrl}/${id}`, httpOptions).toPromise();
  }

  createDrink(drink: Drink): Promise<Drink>
  {
    delete drink.id;
    // console.log(drink);
    return this.http.post<Drink>(`${this.drinkUrl}`, drink, httpOptions).toPromise();
  }

  updateDrink(drink: Drink): Promise<Drink>
  {
    return this.http.put<Drink>(`${this.drinkUrl}/${drink.id}`, drink, httpOptions).toPromise();
  }

  deleteDrink(id): Promise<Drink>
  {
    return this.http.delete<Drink>(`${this.drinkUrl}/${id}`, httpOptions).toPromise();
  }
}


