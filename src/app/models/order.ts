import { ProductRequest } from "./product";

export interface Order {

  product: ProductRequest;//product: any
  deliveryDate?: any;
  deliveryAddress?: any;
  status?: boolean;

}
