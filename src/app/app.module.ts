import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import {RootStoreModule} from "./core/ngrx/root-store/root-store.module";
import {ProductsModule} from "./modules/products/products.module";
import {ProductsComponent} from "./modules/products/products/products.component";
import {UsedUIComponents} from "./modules/shared/imports/UsedUIComponents";
import {SharedModule} from "./modules/shared/shared.module";
import { HomeComponent } from './modules/home/home/home.component';
import {HomeModule} from "./modules/home/home.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    RootStoreModule,
    ProductsModule,
    SharedModule,
    UsedUIComponents,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
