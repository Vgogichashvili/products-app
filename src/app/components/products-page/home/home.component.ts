import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';
import { ProductsStateService } from 'src/app/services/products-service/products-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  productsList$:Observable<any[]> =this.productStateService.getFilterProducts();

  constructor(private productStateService:ProductsStateService,
    private productsListService:ProductsListService,
    private router:Router ){ }

    ngOnInit(): void {
      this.productsListService.listOfProducts()
    }
    addToCart(addProduct: any) {
      this.productStateService.addtoCart(addProduct);
  }
  sendClick(){
    alert('Your message has been sent, Thank you');
    this.router.navigate(['/home'])
  }
  
  images = [
    {
      imageSrc:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_934/https://www.essentialhome.eu/inspirations/wp-content/uploads/2022/07/Upscale-home-decor-Nathalie-I--1024x934.jpeg',
      imageAlt: 'home-decor',
    },
    {
      imageSrc:
        'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3333,w_5000,x_0,y_0/c_limit,dpr_2.625,f_auto,fl_lossy,q_80,w_412/SeptemberShop-courtesy_gb1yug.jpg',
      imageAlt: 'clothing',
    },
    {
      imageSrc:
        'https://media.istockphoto.com/id/997351252/photo/mans-hand-holding-white-mobile-phone-on-desk-in-office.jpg?s=612x612&w=0&k=20&c=G0d08O2TBo2_etyR6hivbi_pf_wKJzuun0ehG4gTbQU=',
      imageAlt: 'technique',
    },
    {
         imageSrc:
         'https://media.istockphoto.com/id/1127701757/photo/top-view-of-trendy-wooden-office-desk-with-keyboard-white-earphones-and-office-supplies.jpg?s=612x612&w=0&k=20&c=qHS6z3Lg-8mUie7kVxL2-DDgdx9mEt3U6s6t7NiXFq8=',
         imageAlt: 'mobile',
    },
]
}
