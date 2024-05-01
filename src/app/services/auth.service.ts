import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClientModule
  ) { }

  // function to call login API
  authenticateLogin(email: string , password: string) {
    let result = this.http.post('http://127.0.0.1:8000/login', { email, password });
    console.log("login result");
    //console.log(result);
  }
}
