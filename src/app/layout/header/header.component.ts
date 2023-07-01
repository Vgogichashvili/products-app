import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainCartComponent } from 'src/app/components/products-component/main-cart/main-cart.component';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';
import { ProductsStateService } from 'src/app/services/products-service/products-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public totalItem: number = 0;

  isMenuOpen = false;
  
  constructor( private productStateService:ProductsStateService,
                      private productsListService:ProductsListService,
                      private router:Router){}

  ngOnInit(): void {
    this.productStateService.getCartItem().subscribe(res => {
      this.totalItem = res.length;
  })
  
  }
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
  onClick(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
  
}
