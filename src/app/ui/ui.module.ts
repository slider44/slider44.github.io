import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from '../component/shopping-cart/shopping-cart.component';

const routes: Routes = [
   { path: 'cart' , component: ShoppingCartComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent,ShoppingCartComponent],
  exports: [LayoutComponent,ShoppingCartComponent]
})
export class UiModule { }
