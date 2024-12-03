import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthAdapter } from './adapters/auth-adapter';
import { AuthService } from './auth.service';
import { AuthAPI } from './base/auth-api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthAdapter,
    {
      provide : AuthAPI,
      useClass : AuthService
    },
  ]
})
export class AuthLibModule { }
