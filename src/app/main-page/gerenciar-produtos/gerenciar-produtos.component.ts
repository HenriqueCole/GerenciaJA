import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerenciar-produtos',
  templateUrl: './gerenciar-produtos.component.html',
  styleUrls: ['./gerenciar-produtos.component.css']
})
export class GerenciarProdutosComponent implements OnInit {

  listaProdutos = [
    'iPhone', 'Computador', 'Tênis', 'Drone', 'Lamborghini', 'Ferrari'
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  OpenProduct(produto) {
    this.router.navigate(['/produtos/' + produto])
  }

  voltarParaMain(){
    this.router.navigate(['/main-screen'])
  }
}
