import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PRODUCTS_API} from "../config/apis";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(PRODUCTS_API.all);
  }
}
