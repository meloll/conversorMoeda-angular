import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  senha:any;

  formCadastro = new FormGroup({
    name: new FormControl('', Validators.required),
    email :new FormControl('', Validators.compose([Validators.required,
       Validators.email])),
    data : new FormControl(''),
    senha: new FormControl('',Validators.compose([Validators.required,
       Validators.minLength(4),Validators.maxLength(8)])),
  })

  constructor( private formBuilder: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {




  }
  email:any=this.formCadastro.get('email');

  verificarData(){
    let dataAtual = new Date()
    console.log(dataAtual)
  }


  cadastratar(){
    console.log(this.formCadastro.get('senha')?.invalid)
    console.log(this.formCadastro, "meu formulario")
  }

}
