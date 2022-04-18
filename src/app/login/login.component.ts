import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login_obj: any= {
  }
  
  constructor(private authServ: AuthService, private router: Router) { 
    if(this.authServ.isUserLoggedIn()){
      this.router.navigate(["products"]);
    }
  }

  ngOnInit(): void {
  }
  login(){
    this.authServ.login(this.login_obj.username,this.login_obj.password);
  }

}
