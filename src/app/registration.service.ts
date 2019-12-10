import { Injectable } from '@angular/core';
import { User } from './user';
import { httpOptions } from './auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService
{
  private authUrl: string = 'http://localhost:8080/users';
  constructor(private http: HttpClient) { }

  // async register(username: string, password: string): Promise<User>
  async register(username: string, password: string): Promise<any>
  {
    try
    {
      // console.log("register starts!");

      const res = await this.http.post<User>(`${this.authUrl}/register`, {
        "username": `${username}`,
        "password": `${password}`,
        "enabled": "true",
        "role": "ROLE_USER"
      }, httpOptions).toPromise();

      return res;
    } catch (e)
    {
      // console.log(e);
      return Promise.reject();
    }
  }
}
