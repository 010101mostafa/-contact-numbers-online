import { Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
export const routes:Routes=[
    {path:"",component:ListComponent},
    {path:"edit",component:AddComponent},
    {path:"add",component:AddComponent},
]