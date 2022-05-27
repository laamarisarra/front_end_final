import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }





  getUser(token: string): any{
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}


