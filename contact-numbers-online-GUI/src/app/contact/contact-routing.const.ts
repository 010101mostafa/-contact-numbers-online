import { Routes } from '@angular/router';

import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
export const routes:Routes=[
    {path:"edit",component:AddComponent},
    {path:"add",component:AddComponent},
    {path:"",component:ListComponent},
    {path:":page",component:ListComponent},
]
