import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { setLogin } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //user:Observable<firebase.User> ;
  authError:any;
  
  constructor(public firebaseAuth:AngularFireAuth,private router: Router) { 
    //this.user = firebaseAuth.authState;
  }

  loginWithEmail(email:string,senha:string){
    let thisService = this;
    thisService.authError=null;
    this.firebaseAuth.signInWithEmailAndPassword(email,senha).then(
      value =>{
        
        setLogin(true)
        console.log("usuário logado")
        this.router.navigate(['/home'])
      }
    ).catch((error)=>{
      console.log(error.message)

      thisService.authError = error;
    })

  }







}
