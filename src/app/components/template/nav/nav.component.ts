import { Component, OnInit } from '@angular/core';
import { getLogin, setLogin } from 'src/app/app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  login:any;

  ngOnInit(): void {
  }

  getLoginNav(){
    return getLogin();
  }


  fazerLogOut(){
    setLogin(false);
  }

}
