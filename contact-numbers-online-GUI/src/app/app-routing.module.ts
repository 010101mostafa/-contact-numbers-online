import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"user" , loadChildren:()=> import('./user/user.module').then(m=>m.UserModule) } ,
  {path:"contact" , loadChildren:()=> import('./contact/contact.module').then(m=>m.ContactModule),canActivate:[AuthGuard] } ,
  {path:"**" , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
