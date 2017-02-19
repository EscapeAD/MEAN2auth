import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name: String;
username: String;
email: String;
password: String;

  constructor() { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    console.log('SUBMITED')
    console.log(this.name)
    console.log(this.username)
  }

}
