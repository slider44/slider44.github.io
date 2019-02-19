import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartPrevComponent } from './shopping-cart-prev.component';

describe('ShoppingCartPrevComponent', () => {
  let component: ShoppingCartPrevComponent;
  let fixture: ComponentFixture<ShoppingCartPrevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartPrevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
