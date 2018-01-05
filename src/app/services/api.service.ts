import { Injectable } from '@angular/core';
import { Product, Image } from '../packages/product';

@Injectable()
export class ApiService {
  private data: {[key: string]: Product} = {
    "a1": new Product("a1", "Shoes", "The best shoes in town", 12, [
      new Image("Front", "generic/front"),
      new Image("Side",  "generic/side" )
    ]),
    "a2": new Product("a2", "TV", "The best TV in town", 200, [
      new Image("Front", "generic/front"),
      new Image("Side",  "generic/side" )
    ]),
    "a3": new Product("a1", "Shoes", "The best shoes in town", 12, [
      new Image("Front", "generic/front"),
      new Image("Side",  "generic/side" )
    ]),
    "a4": new Product("a2", "TV", "The best TV in town", 200, [
      new Image("Front", "generic/front"),
      new Image("Side",  "generic/side" )
    ]),
    "a5": new Product("a1", "Shoes", "The best shoes in town", 12, [
      new Image("Front", "generic/front"),
      new Image("Side",  "generic/side" )
    ]),
    "a6": new Product("a2", "TV", "The best TV in town", 200, [
      new Image("Front", "generic/front"),
      new Image("Side",  "generic/side" )
    ]),
    "a7": new Product("a3", "Smartphone", "The best smartphone in town", 100, [
      new Image("Front", "generic/front"),
      new Image("Side",  "generic/side" )
    ])
  };

  constructor() {}

  public getProducts(): Product[] {
    let keys = Object.keys(this.data);
    return keys.map(x => this.data[x]);
  }

  public getProductById(id: string): Product {
    return this.data[id];
  }
}