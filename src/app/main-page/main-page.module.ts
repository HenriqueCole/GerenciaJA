import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { KartComponent } from './kart/kart.component';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'produto',
        component: ProdutoComponent,
        canActivate: []
      }
    ])
  ],
  declarations: [PedidosComponent, ClientesComponent, ProdutosComponent, MainScreenComponent, ProdutoComponent, KartComponent, GerenciarProdutosComponent]
})
export class MainPageModule { }