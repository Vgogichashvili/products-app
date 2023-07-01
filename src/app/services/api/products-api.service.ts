import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

// api service

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  // call api

  private apiUrl = environment.apiUrl;  
 
  constructor( private http:HttpClient) { }

//  whole product api


    getProductList(): Observable<any[]> {
      return this.http.get<any>(`${this.apiUrl}/products?limit=8`).pipe(
        map((res:any) => res.products))
    }


 //  search form and whole products list

  getProductsSearch(search:string = '', ) : Observable<any>{
    return this.http.get<any>(search ? `${this.apiUrl}/products/category/${search}` : `${this.apiUrl}/products?limit=16`);
  }
  

  // category

  getCategory():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/products/categories`)
  }

  //  go to detail page with id

  getdetailProdact(id:any): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/products/${id}`)
    }
}
