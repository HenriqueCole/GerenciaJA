import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  listaProdutos = [
    {nome: 'iPhone'}, {nome:'Computador'}, {nome:'Tênis'}, {nome:'Drone'}, {nome:'Lamborghini'},{ nome:'Ferrari'}
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.setItem("orders", JSON.stringify(this.listaProdutos))
  }

  OpenProduct(produto) {
    this.router.navigate(['/produtos/' + produto])
  }

  voltarParaMain(){
    this.router.navigate(['/main-screen'])
  }

  editarProdutos(){
    this.router.navigate(['/gerenciarProdutos'])
  }

  AddToKart(index){
    console.log(index)
    localStorage.setItem("orders", JSON.stringify(this.listaProdutos[index]))
  }

}
