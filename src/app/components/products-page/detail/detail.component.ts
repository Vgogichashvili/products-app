import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';
import { ProductsStateService } from 'src/app/services/products-service/products-state.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  
  itemProduct$: Observable<any> = this.productStateService.getDetailPage();
  loading$: Observable<boolean> = this.productStateService.getLoading();
  error$: Observable<boolean> = this.productStateService.getError();
  
  productsId: any;

  constructor( private productsListService:ProductsListService,
    private productStateService:ProductsStateService,
    private route:ActivatedRoute) {}



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productsId = params.get('id')
    })
    this.productsListService.detailPage(this.productsId)
  }
  addToCart(item: any) {
    this.productStateService.addtoCart(item);
  }
  
}

