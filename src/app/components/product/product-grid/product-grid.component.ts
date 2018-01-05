import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../packages/product/index';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  @Input("products")
  public products: Product[];

  constructor() { }

  ngOnInit() { }

}
