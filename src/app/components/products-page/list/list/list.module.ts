import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from '../list.component';
import { MainListComponent } from 'src/app/components/products-component/main-list/main-list.component';
import { MainSearchComponent } from 'src/app/components/products-component/main-search/main-search.component';


@NgModule({
  declarations: [
    ListComponent,
    MainListComponent,
    MainSearchComponent
   
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
