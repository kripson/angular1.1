import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	firstName = "";
	password = "";
   constructor(private router: Router,private http:HttpClient){}

  ngOnInit() {
  }
  nav()
  {
      this.http.get("/api/auth").subscribe(res => {     
    if (res != false)
    {
    	this.router.navigateByUrl('/account');	
    }


    }); 
  	
  }
}
