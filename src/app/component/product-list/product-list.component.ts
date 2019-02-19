import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SampleService } from 'src/app/core/services/sample.service';
import { Product } from 'src/app/core/shared/model/product';
import { Order } from 'src/app/core/shared/model/order';
import { OrderDetail } from 'src/app/core/shared/model/orderDetail';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  orderList: Order[] = [];
  orderDetail: OrderDetail = {};
  totalAmount: number = 0;
  order: Order = {
    subTotal : 0,
    orderDetails:[{
    }]
  }

  @Output() selectItemEvent: EventEmitter<any> = new EventEmitter();

  counter: number = 0;
  constructor(private productService: SampleService) { }

  ngOnInit() {
    this.getProducts();
    this.order.orderDetails.pop();
   
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;

    })
  }
  
  createNewOrder(product: Product) {

    this.orderDetail.id = product.id;
    this.orderDetail.productName = product.name;
    this.orderDetail.amount = product.price;  
    this.orderDetail.quantity = 1;
    this.orderDetail.totalAmount = this.orderDetail.amount;
    this.order.subTotal = this.calculateSubTotal(this.orderDetail.totalAmount);
    var copy = Object.assign({}, this.orderDetail)
    this.order.orderDetails.push(copy); 
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  addItem(product: any) {

    let updateItem = this.order.orderDetails.find(this.findIndexToUpdate, product.id);
    if (!updateItem) {
      this.createNewOrder(product);

    }
    else {
      let updateItem = this.order.orderDetails.find(this.findIndexToUpdate, product.id);
      let index = this.order.orderDetails.indexOf(updateItem);
      updateItem.quantity +=1;
      updateItem.totalAmount = updateItem.quantity * updateItem.amount;
      //var copy = Object.assign({}, updateItem);
      this.order.subTotal = this.calculateSubTotal(updateItem.amount);
      this.order.orderDetails[index] = updateItem;
    }


    this.selectItemEvent.emit(this.order);

  }

  private calculateSubTotal(amount: number) {
    return this.order.subTotal + amount;
  }

}
