import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';
import { ProductsStateService } from 'src/app/services/products-service/products-state.service';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

// smart component of list. 
// observebles,  call servise
// Filters the data
// add some items in carts

// @UntilDestroy()
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit{
  
  categoryList$ = this.productStateService.getCategoryValue();


  loading$:Observable<boolean> = this.productStateService.getLoading();
  error$:Observable<boolean> = this.productStateService.getError();
  searchValue$:Observable<any> = this.productStateService.getSearchValue();
  productsList$:Observable<any[]> =this.productStateService.getFilterProducts();

  constructor(private productStateService:ProductsStateService,
                    private productsListService:ProductsListService, ){ }


  ngOnInit(): void {
    
// ეს ქოლი მირღვევს dry პრინციპს, 
// მაგრამ გვერდიდან გვერდზე რომ გადავდივარ ინფორმაცია არ მეკარგება
    // this.productsListService.listOfProducts()
// ეს ქოლი არ მირღვევს dry პრინციპს, 
// მაგრამ გვერდიდან გვერდზე გადასვლაზე ინფრომაცია მირეფრეშდება

    this.productsListService.searchCategory('')
    this.selectProduct()
    this.filterProducts()
  }
selectProduct() {
  this.productsListService.categoryList()
}
filterProducts(){
    this.searchValue$.subscribe((categoryValue:any) => {
      if(categoryValue && categoryValue.products) {
          this.productsList$ = of(categoryValue.products);
      }
    })
  }
  addToCart(addProduct: any) {
    this.productStateService.addtoCart(addProduct);
  }
  search($event:any){
    this.productsListService.searchCategory($event.value)
  }
}
