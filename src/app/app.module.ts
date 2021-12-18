import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { MainPageModule } from './main-page/main-page.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { ProdutosComponent } from './main-page/produtos/produtos.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: TelaLoginComponent, canActivate: [

      ]},
      {
        path: 'produtos',
        component: ProdutosComponent
      }
    ]),
    BrowserModule,
    LoginModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
