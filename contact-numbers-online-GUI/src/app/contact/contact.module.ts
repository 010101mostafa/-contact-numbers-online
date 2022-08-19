import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './contact-routing.const';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { OneComponent } from './one/one.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    OneComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
