import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TelaLoginComponent],
  exports: [TelaLoginComponent]
})
export class LoginModule { }
