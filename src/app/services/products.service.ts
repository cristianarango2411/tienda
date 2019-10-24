import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product[];

  constructor(private http : HttpClient) {
    
  }

  list(): Product[]{
    return this.products=[
      new Product(
        "0",
        "Camisa",
        "10",
        "http://colorcaribe.co/wp-content/uploads/product.png"
      ),
      new Product(
        "1",
        "Pantalon",
        "20",
        "http://colorcaribe.co/wp-content/uploads/product.png"
      ),
      new Product(
        "2",
        "Zapatos",
        "40",
        "http://colorcaribe.co/wp-content/uploads/product.png"
      ),
      new Product(
        "0",
        "Camisa",
        "10",
        "http://colorcaribe.co/wp-content/uploads/product.png"
      ),
      new Product(
        "1",
        "Pantalon",
        "20",
        "http://colorcaribe.co/wp-content/uploads/product.png"
      ),
      new Product(
        "2",
        "Zapatos",
        "40",
        "http://colorcaribe.co/wp-content/uploads/product.png"
      )
    ];
  }
   
}
