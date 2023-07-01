import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';

// detail dumb component, where is input, output and html.
@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainDetailComponent {

  @Input() itemProduct: any;
  @Input() loading:any;
  @Input() error: any;
  @Output() addToCartClicked = new EventEmitter<any>();

  addToCart(itemProduct:any) {
    this.addToCartClicked.emit(itemProduct);
  }

}
