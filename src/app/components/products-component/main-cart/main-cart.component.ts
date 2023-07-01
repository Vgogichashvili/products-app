import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';


// cart dumb component, where is input, output and html.
@Component({
  selector: 'app-main-cart',
  templateUrl: './main-cart.component.html',
  styleUrls: ['./main-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCartComponent  {

@Input() productItem: any[] = [];
@Input() grandTotal: number = 0;
@Output() removeItemClick = new EventEmitter();
@Output() emptyCartItemClick = new EventEmitter();

constructor(private router: Router){}

 removeItem(item:any){
    this.removeItemClick.emit(item)

  }
  emptyCartItem(){
    this.emptyCartItemClick.emit()
  }
  buyClick(){
    alert('Thank you for your trust, we will contact you soon')
    this.router.navigate(['/list'])
  }
}