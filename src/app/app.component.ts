import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})


export class AppComponent {
  

}

let login=false;

export function getLogin(){
  return login
}

export function setLogin(valor:boolean):void{
  login=valor
}


