export interface Order {
    order_id: string;
    code: string;
    order_date: Date;
    booking_date: Date;
    status: number;
    campus_description: string;
    product_category_description: string;
    product_description: string;
    quantity: number;
    price: number;
    sub_total: number;
    discount: number;
    total_tax: number;
    total: number;
    currency_type: string;
    start_hour: Date;
    end_hour: Date;
  }