import { Injectable } from '@angular/core';
import { ProductsApiService } from '../api/products-api.service';
import { ProductsStateService } from './products-state.service';

@Injectable({
  providedIn: 'root'
})

//  conection api service and state

export class ProductsListService {
  constructor( private productsService: ProductsApiService,
                      private productStateService:ProductsStateService) { }

//  call whole product

     listOfProducts(){
      this.productStateService.setLoading(true);
      this.productsService.getProductList().subscribe(
      (products) => {
           this.productStateService.setFilterProducts(products)
            this.productStateService.setLoading(false)
          },
        );
      }

//  call just all category

    categoryList(){
      this.productStateService.setLoading(true);
      this.productsService.getCategory().subscribe(
        (categoryValue) => {
          this.productStateService.setCategoryValue(categoryValue)
        },
        (error) => {
          this.productStateService.setError(error)
          this.productStateService.setLoading(false);
        }
      )
    }

// how search category

    searchCategory(searchValue:string){
      this.productStateService.setLoading(true);
      this.productsService.getProductsSearch(searchValue,).subscribe(
        (searchValue) => {
          this.productStateService.setSearchValue(searchValue)
          this.productStateService.setLoading(false);
        },
        (error) => {
          this.productStateService.setError(error)
          this.productStateService.setLoading(false);
        }
      )
    }

// go to detail page 


    detailPage(productId:any){
      this.productStateService.setLoading(true);
      this.productsService.getdetailProdact(productId).subscribe(
        (detailPage) => {
          this.productStateService.setDetailPage(detailPage)
          this.productStateService.setLoading(false);
        },
        (error) => {
          this.productStateService.setError(error)
          this.productStateService.setLoading(false);
        }
      )
    }
}
