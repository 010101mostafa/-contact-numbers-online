import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS} from '@angular/common/http'

import { routes } from './contact-routing.const';
import { AddComponent } from './components/add/add.component';
import { OneComponent } from './components/one/one.component';
import { ListComponent } from './components/list/list.component';
import { AuthInterceptor } from './interseptors/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './components/delete/delete.component';



@NgModule({
  declarations: [
    AddComponent,
    OneComponent,
    ListComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}
  ]
})
export class ContactModule { }
