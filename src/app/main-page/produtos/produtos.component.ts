import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  listaProdutos = [
    1, 3, 58, 43, 41, 4343, 4040, 38
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  abrirProduto(produto) {
    this.router.navigate(['/produto', produto])
  }

  voltarParaMain(){
    this.router.navigate(['/'])
  }

}
