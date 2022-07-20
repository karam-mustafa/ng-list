import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsRoutingModule} from "./modules/products/products-routing.module";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ProductsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
