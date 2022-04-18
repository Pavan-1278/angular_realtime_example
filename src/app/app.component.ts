import { Component } from '@angular/core';
import { AuthService } from './auth-services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  user_LoggedIn=false;
  constructor(private authServ: AuthService)
  {
    this.user_LoggedIn=this.authServ.isUserLoggedIn();
  }
  logout(){
    this.authServ.logoutUser();
  }
}
