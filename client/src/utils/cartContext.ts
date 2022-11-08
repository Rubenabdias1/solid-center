import { createContext } from 'react';
import { Product } from '../graphql/generated/graphql';

export type CartItem = {
  product: Omit<Product, 'createdAt' | 'updatedAt'>;
  quantity: number;
};

export const CartContext = createContext<{
  cart: CartItem[];
  addItem: (item: CartItem['product'], quantity: number) => void;
  removeItem: (index: number) => void;
  editQuantity: (index: number, quantity: number) => void;
}>({
  cart: [],
  addItem: () => {
    return;
  },
  removeItem: () => {
    return;
  },
  editQuantity: () => {
    return;
  },
});
