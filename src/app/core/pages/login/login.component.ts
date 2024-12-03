import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'auth';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers:[]
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required])

  });

  constructor(private _auth:AuthService) {
    
  }

  login() {
    this._auth.login(this.loginForm.value).subscribe(res =>{
      console.log(res);
      
    })
  }
}



// rxjs 
// angular 17

// lib