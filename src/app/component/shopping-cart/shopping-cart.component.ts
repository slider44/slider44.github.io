import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/core/services/sample.service';
import { Product } from 'src/app/core/shared/model/product';
import { NgAlertService, MessageType } from '@theo4u/ng-alert';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[] = []

  constructor(private productService: SampleService, private _ngAlert: NgAlertService) { }

  

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    })
  }

  delete(product) {
      return this.productService.deleteProduct(product.id).subscribe(data => {
      this.getAllProducts();
    });
  }

  
}
