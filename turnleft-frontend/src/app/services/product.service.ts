import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) {}

  //fetch all product from backend
  getAllProducts(numberOfResults: number = 10) {
    return this.http.get(this.SERVER_URL + '/products', {
      params: { limit: numberOfResults.toString() },
    });
  }

  showMessage() {
    console.log('Service Called');
  }
}
