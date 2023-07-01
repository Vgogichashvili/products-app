import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsStateService } from 'src/app/services/products-service/products-state.service';
// import { ProductsStateService } from 'src/app/services/products-service/products-state.service';


// @UntilDestroy()

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  public productItem: any[] = [];
  public grandTotal: number = 0;
  productItem$: Observable<any> = this.productsStateService.getCartItem()

constructor(private productsStateService:ProductsStateService,){}
 
ngOnInit(): void {

  this.addCartItem();

}

  addCartItem(){
    this.productItem$
    // .pipe(
    //   untilDestroyed(this))
    .subscribe(res => {
      this.productItem = res;
      this.productItem.forEach((a:any) => {
        Object.assign(a, {quantity: 1, total: a.price});
      });
      this.grandTotal = this.productsStateService.getTotalPrice();
    });
  }
  removeItem(item: any): void {
    this.productsStateService.removeCartItem(item);
  }

  emptyCartItem(): void {
    this.productsStateService.removeAllCart();
  }
}
