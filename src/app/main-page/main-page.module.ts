import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { LoginModule } from 'src/app/login/login.module';
import { RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RouterModule.forRoot([
      {
        path: 'pedidos',
        component: PedidosComponent,
        canActivate: []
      },
      {
        path: 'produtos', children: [
          {
            path: '', 
            component: ProdutosComponent
          },
          {
            path: 'produto',
            component: ProdutoComponent
          }
        ]
      }
    ])
  ],
  declarations: [PedidosComponent, ClientesComponent, ProdutosComponent, MainScreenComponent]
})
export class MainPageModule { }
