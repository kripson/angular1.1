import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	firstName = "";
	password = "";
   constructor(private router: Router){}

  ngOnInit() {
  }
  nav()
  {
    if (this.firstName == "user1" && this.password == "123")
    {
      this.router.navigateByUrl('/account');
    }
    else if (this.firstName == "user2" && this.password == "1234")
    {
      this.router.navigateByUrl('/account');
    }
    else if(this.firstName == "user3" && this.password == "12345")
    {
      this.router.navigateByUrl('/account');
    }
    else
    {
    	alert("Wrong username or password");
    }
  	
  }
}
