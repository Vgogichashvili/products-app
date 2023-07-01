import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from 'src/app/components/products-page/list/list.component';
import { registerGuard } from 'src/app/guards/register.guard';
import { RegisterComponent } from '../register.component';

const routes: Routes = [
  {
    path: '', component: RegisterComponent
  },
  {
    path:'list', component:ListComponent,
    canActivate: [registerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
