import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'Cambodia'},
    {id: 3, name: 'American Thor'},
  ];

  registerForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required]),
    country : new FormControl('',[Validators.required]),
    age : new FormControl('',[Validators.required, Validators.min(18), Validators.max(150)]),
    phone : new FormControl('',[Validators.required, Validators.pattern( /^\+84\d{9,10}$/)]),
    gender : new FormControl('',[Validators.required]),
  })

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get country() {
    return this.registerForm.get('country');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  onSubmit() {
    console.log(this.registerForm);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
