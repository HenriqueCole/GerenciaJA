import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
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
