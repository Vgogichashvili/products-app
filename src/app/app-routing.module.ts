import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/products-page/home/home.component';
import { ErrorComponent } from './layout/error/error.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path:'', redirectTo:"home",pathMatch: 'full',
  },
  {
    path: 'home', component: HomeComponent, pathMatch: 'full',
    loadChildren: () => import('./components/products-page/home/home/home.module').then(item => item.HomeModule)
  
  },
  {
    path: '', 
    canActivate:[loginGuard],
    children: [
      {
        path: 'list', pathMatch: 'full',
        loadChildren: () => import('./components/products-page/list/list/list.module').then(item => item.ListModule),
        
      }, 
      {
        path: 'details/:id',pathMatch:'full',
        loadChildren: () => import('./components/products-page/detail/detail/detail.module').then(item => item.DetailModule),
      
      }, 
      {
        path: 'cart', pathMatch: 'full',
        loadChildren: () => import('./components/products-page/cart/cart/cart.module').then(item => item.CartModule),
        
      }, 
    ]
  },
 
  
  {
    path: 'login',  pathMatch: 'full',
    loadChildren: () => import ('./components/auth-page/login/login/login.module').then(item => item.LoginModule)
  }, 
  {
    path: 'register', pathMatch: 'full',
    loadChildren: () => import('./components/auth-page/register/register/register.module').then(item => item.RegisterModule)
  },
  {
    path: '**', pathMatch: 'full',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
