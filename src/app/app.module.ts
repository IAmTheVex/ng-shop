import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ApiService } from './services/api.service';
import { ProductGridComponent } from './components/product/product-grid/product-grid.component';
import { ProductItemComponent } from './components/product/product-item/product-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductGridComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
