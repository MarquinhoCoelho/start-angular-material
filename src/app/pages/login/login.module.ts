import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    CadastroComponent

  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
