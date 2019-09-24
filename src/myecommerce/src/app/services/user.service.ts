import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(
    private readonly _httpClient: HttpClient
  ) { 
    //this.url = environment.backendEndpoint;
    this.url = 'api/';
  }

  getUsersInfo(): Observable<any> {
    return this._httpClient.get(`${this.url}users_data`);
  }

}
