import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getLogin, setLogin } from 'src/app/app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }

  getLoginNav(){
    return getLogin();
  }


  fazerLogOut(){
    setLogin(false);
    this.snackBar.open("Logout efetuado com sucesso",'X',{
      duration: 10000,
      horizontalPosition:"center",
      verticalPosition: "top"
      
    })
  }

}
