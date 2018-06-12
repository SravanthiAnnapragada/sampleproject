import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  loginUser(e) {
  	e.preventDefault();
  	var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    //console.log(username, password);

    if(username == 'testuser1' && password == 'test1234' || username == 'guest' && password == 'test1234'){

      this.router.navigate(['/material'])
    }
   else{
     alert ("username and password are not valid");
   }  
     
  }
  
}
