import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from'@angular/material/sidenav';
import {MatListModule} from'@angular/material/list';
import {MatCardModule} from'@angular/material/card';
import {MatButtonModule} from'@angular/material/button';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule}from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import{ReactiveFormsModule} from '@angular/forms'


import{AngularFireModule} from '@angular/fire'
import {AngularFireAuth} from '@angular/fire/auth'
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ConversorComponent } from './views/conversor/conversor.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ConversorComponent,
    LoginComponent,
    CadastroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDfVg91st9jYQTMjOmejZjMvBG1fUAhPhs",
        authDomain: "conversor-angular.firebaseapp.com",
        projectId: "conversor-angular",
        storageBucket: "conversor-angular.appspot.com",
        messagingSenderId: "971356464396",
        appId: "1:971356464396:web:9b5228c2fc0bf8bf81d529"
  
      }),
    AngularFireAuthModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
