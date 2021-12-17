import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { LoginModule } from 'src/app/login/login.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RouterModule.forRoot([
      {
        path: 'pedidos',
        component: PedidosComponent,
        canActivate: []
      }
    ])
  ],
  declarations: [PedidosComponent, ClientesComponent, ProdutosComponent, MainScreenComponent]
})
export class MainPageModule { }
