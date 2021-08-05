import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { login } from './interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: login = {email:'', password:''};

public LoginForm = new FormGroup({
  'Email': new FormControl('',Validators.email),
  'password': new FormControl()
}) 
  constructor() { }

  onSubmit() {
    let email = this.LoginForm.controls['Email'].value;
    let password = this.LoginForm.controls['password'].value;
    if(email == undefined || email == null || email == ''){
        alert("email or password missing")
    }
    else if(password == undefined || password == null || password == ''){
      alert("email or password missing")
    }
    else if(this.LoginForm.status.toLowerCase() == "valid"){
      alert("Form Submitted successfully")
    }
  }

  submitForm(event:any){
  }

  ngOnInit(): void {
  }

}
