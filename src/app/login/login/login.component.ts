import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:String="";
  password:String="";

  constructor(private authService: AuthService, private api: ApiService, private router: Router) {

  }

  ngOnInit(): void {
    
  }

  login() {
    const credentials={username:this.username, password:this.password};
    this.authService.login(credentials);
    this.api.getDepartmentData();
  }
}
