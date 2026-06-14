export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVeg: boolean;
  bestseller?: boolean;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
  specialInstructions?: string;
}

export interface UserAddress {
  id: string;
  village: string;
  addressLine1: string;
  addressLine2?: string;
  district: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}