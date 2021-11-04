import { Component, OnInit } from '@angular/core';
import { setLogin } from 'src/app/app.component';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService) { }

  public email:string="";
  public senha:string="";

  public mostrarCadastro = false;

  ngOnInit(): void {
  }
  
  fazerLogin(){

    this.authService.loginWithEmail(this.email,this.senha)
    console.log("meu login")
    console.log(this.email , "login")
    console.log(this.senha , "senha")
    
  }

  liberarCasdastro(){
    this.mostrarCadastro = !this.mostrarCadastro
  }
  

}

