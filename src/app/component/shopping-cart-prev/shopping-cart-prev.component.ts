import { Component, OnInit, Input, OnChanges, SimpleChange, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/core/shared/model/product';
import { Order } from 'src/app/core/shared/model/order';
import { forEach } from '@angular/router/src/utils/collection';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-shopping-cart-prev',
  templateUrl: './shopping-cart-prev.component.html',
  styleUrls: ['./shopping-cart-prev.component.scss']
})
export class ShoppingCartPrevComponent implements OnInit, OnChanges {

   
  @Input() order : any;
 
  
  // @Output() calculateAmount: EventEmitter<any> = new EventEmitter();

  items : any;
  data: any;
  totalAmount : number = 200;

  constructor() { }

  ngOnInit() {
  
  }
  
  ngOnChanges(changes: SimpleChanges) {

    this.items = this.order;
  
  }




}
