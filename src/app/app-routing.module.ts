
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ConversorComponent } from './views/conversor/conversor.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path: "home",component:HomeComponent},
  {path: "conversor",component:ConversorComponent},
  {path:"cadastro",component:CadastroComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
