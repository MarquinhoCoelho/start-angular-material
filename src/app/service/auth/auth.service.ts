import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  autenticated: boolean = false;

  constructor() { }

  authenticatedUser() {
    this.autenticated = true;
    console.log(this.autenticated);

  }

  userAreAuth() {
    return this.autenticated
  }

}
