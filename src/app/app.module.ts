
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 
import { HttpClientModule } from '@angular/common/http';


//Module
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { NgAlertModule } from '@theo4u/ng-alert';

//Component
import { ProductListComponent } from './component/product-list/product-list.component'; 
import { ProductComponent } from './container/product/product.component';
import { HomeComponent } from './component/home/home.component';
import { MenuBarComponent } from './navigation/menu-bar/menu-bar.component';
import { AppComponent } from './app.component';

//Service
import { DataService } from './core/services/data.service';
import { SampleService } from './core/services/sample.service';
import { ContainerModule } from './container/container.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    UiModule,
    NgAlertModule,
    ContainerModule
  ],
  providers: [DataService, SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
