import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { getLogin } from 'src/app/app.component';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  public lista = new Array();
  constructor(public api:ApiService) { }

  public resultadoConvercao = "00"
  public moeda1:any;
  public valor:any;

  ngOnInit(): void {

    this.listarTodasMoedas()
    console.log(this.lista)
  }
  login=getLogin();

  listarTodasMoedas(){
    this.api.buscarMoedas().subscribe(res =>{
      console.log(res,"minhas moedas")
  
      this.lista.push(res.ARS)
      this.lista.push(res.USD)
      this.lista.push(res.CAD)
      this.lista.push(res.EUR)
      this.lista.push(res.JPY)
      this.lista.push(res.ILS)
      this.lista.push(res.CHF)
      this.lista.push(res.CNY)
      this.lista.push(res.GBP)

    })
   
    
  }
  
  fazerConversao(){
    let conta = this.moeda1*this.valor
    conta = parseFloat(conta.toFixed(2))
    this.resultadoConvercao = conta.toString()
    this.resultadoConvercao=this.resultadoConvercao.replace(".",",")
    console.log(this.resultadoConvercao)
  }

}
