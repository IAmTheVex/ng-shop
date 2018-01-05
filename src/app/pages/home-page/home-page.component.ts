import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../packages/product/index';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.products = this.api.getProducts();
  }

}
