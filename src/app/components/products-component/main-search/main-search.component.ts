import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';
import { ProductsStateService } from 'src/app/services/products-service/products-state.service';

@Component({
  selector: 'app-main-search',
  templateUrl:'./main-search.main-component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent {

  
  @Input() categoryList: any;

  @Output() searchClick = new EventEmitter()

  constructor(private router: Router,
                    private productStateService:ProductsStateService,
                    private productsListService:ProductsListService  ) {}

 search($event:any){
  this.searchClick.emit($event)
}
  onClick(){
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
}
