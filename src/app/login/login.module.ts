import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainScreenComponent } from '../main-page/main-screen/main-screen.component';
import { ProdutosComponent } from '../main-page/produtos/produtos.component';
import { PedidosComponent } from '../main-page/pedidos/pedidos.component';
import { ProdutoComponent } from '../main-page/produto/produto.component';
import { KartComponent } from '../main-page/kart/kart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'main-screen',
        component: MainScreenComponent,
        canActivate: []
      },
      { path: 'produtos', children: [
        {path: '', component: ProdutosComponent},
        {path: ':id', component: ProdutoComponent}
      ]},
      { path: 'produto', children: [
        {path: ':id', component: ProdutoComponent},
        {path: 'carrinho', component: KartComponent}
      ]},
      {
        path: 'pedidos',
        component: PedidosComponent,
        canActivate: []
      }
    ])
  ],
  declarations: [TelaLoginComponent, MainScreenComponent, ProdutosComponent, PedidosComponent, ProdutoComponent, KartComponent],
  exports: [TelaLoginComponent]
})
export class LoginModule { }
