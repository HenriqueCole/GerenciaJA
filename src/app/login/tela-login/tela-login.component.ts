import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  users = [
    {userName: 'Henrique Cole', password: '123'},
    {userName: 'Leonardo Raffaeli', password: '456'},
    {userName: 'Bruno Verbinnen', password: '789'}
  ]

  user = '';
  password = '';

  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logar(){
    for (let i of this.users){
      if (i.userName === this.user && i.password === this.password){
        localStorage.setItem('name', this.user)
        localStorage.setItem('password', this.password)
        this.router.navigate(['/main-screen'])
      }
    }
  }

}
