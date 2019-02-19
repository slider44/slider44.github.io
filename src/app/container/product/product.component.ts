import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  globalData: any;
  constructor() { }

  ngOnInit() {
  }

  forwardItemToParent(data: any) {
    this.globalData = data;
  }

}
