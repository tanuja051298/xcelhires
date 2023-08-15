import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any): any {
    return this.http.post<any>("http://65.0.155.254:5001/admin/auth/login", credentials)
      .toPromise()
      .then(response => {
        if (response && response.status == 200 && response.accessToken) {
          localStorage.setItem("auth_token", response.accessToken);
        }
      });
  }

  logout(): void {
    localStorage.removeItem("auth_token");
  }

  getToken(): any {
    return localStorage.getItem("auth_token");
  }
  isLoggedIn(): boolean {
    return !this.getToken();
  }
}
