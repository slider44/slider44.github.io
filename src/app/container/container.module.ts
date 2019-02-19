import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../component/product-list/product-list.component';
import { ShoppingCartPrevComponent } from '../component/shopping-cart-prev/shopping-cart-prev.component';


const routes: Routes = [
  { path: 'products', component: ProductComponent }
];

@NgModule({
  declarations: [ProductComponent,ProductListComponent,ShoppingCartPrevComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ProductComponent, ProductListComponent,ShoppingCartPrevComponent]
})
export class ContainerModule { }
