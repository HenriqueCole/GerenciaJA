import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainScreenComponent } from '../main-page/main-screen/main-screen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'main-screen',
        component: MainScreenComponent,
        canActivate: []
      }
    ])
  ],
  declarations: [TelaLoginComponent, MainScreenComponent],
  exports: [TelaLoginComponent]
})
export class LoginModule { }
