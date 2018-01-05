import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Product } from '../../../packages/product/index';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input("product")
  public product: Product;
  constructor(public router: Router) { }
  ngOnInit() {}
  public view(id: string) {
    this.router.navigate(["product/" + id]);
  }
}
