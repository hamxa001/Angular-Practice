import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public myvariable: string = "This is my login component";
  constructor() { }

  ngOnInit(): void {
  }

}
