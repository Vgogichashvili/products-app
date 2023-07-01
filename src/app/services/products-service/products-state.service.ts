// state servise of products, can use where i want


import { Injectable } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsApiService } from '../api/products-api.service';
import { StateService } from 'src/app/shared/stateService';



// interface of products

export interface Product{
  products: Products[],
  searchValue: any,
  categoryValue: any,
  detailPage: any,
  cartItem:any[],
  loading: any,
  error:any;
}

const initialState: Product = {
  products : [],
  searchValue: '',
  categoryValue: '',
  detailPage: '',
  cartItem: [],
  loading:false,
  error:null,
}
@Injectable({
  providedIn: 'root'
})
export class ProductsStateService extends StateService<Product> {

  public cartItemList: any = []

  constructor( private productsService: ProductsApiService) { 

    super(initialState);
  }

// all and search products

setSearchValue(searchValue: any){
  this.setState({searchValue})
}
getSearchValue(){
    return this.select((state) => state.searchValue)
  }



//  Filtered Products


  setFilterProducts(products: any[]){
    this.setState({products})
  }

  getFilterProducts(){
    return this.select((state) => state.products)
  }

// category products

setCategoryValue(categoryValue: any){
  this.setState({categoryValue})
}
getCategoryValue(){
    return this.select((state) => state.categoryValue)
  }


// detail page

  setDetailPage(detailPage:any){
    this.setState({detailPage})
  }

  getDetailPage(){
    return this.select((state) => state.detailPage);
  }

//  add

  getCartItem(){
    return this.select((state) => state.cartItem)
  }
  setCartItem(cartItem:any[]){
    this.setState({cartItem})
  }

  addtoCart(products:any){
    this.setState({products })
    this.cartItemList = [...this.state.cartItem];
    this.cartItemList.push(products);
    this.setCartItem(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice():number{
    let grandTotal = 0;
    this.state.cartItem.map((a:any) => {
      grandTotal += a.total;
    });
    return grandTotal; 
  }
  removeCartItem(removeCart: any){
    this.cartItemList = [...this.state.cartItem];
    this.cartItemList.map((a:any, index:any) => {
      if(removeCart.id === a.id){
        this.cartItemList.splice(index, 1);
      }
    })
    this.setCartItem(this.cartItemList);
  }

  removeAllCart(){
    this.setCartItem([]);
  }

  //  loading

  setLoading(loading:boolean){
    this.setState({loading})
  }
  getLoading() {
      return this.select((state) => state.loading);
    }

  //  error
  setError(error: any) {
    this.setState({ error });
  }
  getError() {
    return this.select((state) => state.error);
  }
}
