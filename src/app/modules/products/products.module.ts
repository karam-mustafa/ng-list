import {ProductsService} from "./services/products.service";
import {ProductStoreModule} from "./store/store.module";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {ProductsRoutingModule} from "./products-routing.module";

@NgModule({

  imports: [
    ProductStoreModule,
    ProductsRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
