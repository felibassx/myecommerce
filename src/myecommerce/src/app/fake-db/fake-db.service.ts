import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UsersFakeDb } from './usersFake';

@Injectable({
  providedIn: 'root'
})

export class FakeDbService implements InMemoryDbService {

  createDb(): any {
        return {
            'users_data': UsersFakeDb.users_data 
        }
    }

}
