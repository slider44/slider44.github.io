import { OrderDetail } from './orderDetail';

export interface Order {
    subTotal ? : number;
    orderDetails:OrderDetail[];
}