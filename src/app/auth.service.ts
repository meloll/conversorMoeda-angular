import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { setLogin } from './app.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //user:Observable<firebase.User> ;
  authError:any;
  
  constructor(private snackBar: MatSnackBar,public firebaseAuth:AngularFireAuth,private router: Router) { 
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
        this.snackBar.open("Login efetuado com sucesso",'X',{
          duration: 10000,
          horizontalPosition:"center",
          verticalPosition: "top"
          
        })
      }
    ).catch((error)=>{
      console.log(error.message)
      this.snackBar.open("Login invalido, tente novamente",'X',{
        duration: 5000,
        horizontalPosition:"center",
        verticalPosition: "top"
        
      })

      thisService.authError = error;
    })

  }

  

  







}
