import { FetchResult } from '@apollo/client';
import { Stripe } from '@stripe/stripe-js';
import { createContext } from 'react';
import {
  Product,
  CreatePaymentIntentMutation,
} from '../graphql/generated/graphql';

export type CartItem = {
  product: Omit<Product, 'createdAt' | 'updatedAt'>;
  quantity: number;
};

export const CartContext = createContext<{
  stripe?: Promise<Stripe | null>;
  cart: CartItem[];
  clientSecret?: string;
  addItem: (item: CartItem['product'], quantity: number) => void;
  removeItem: (index: number) => void;
  editQuantity: (index: number, quantity: number) => void;
  checkoutCart?: () => Promise<
    FetchResult<
      CreatePaymentIntentMutation,
      Record<string, any>,
      Record<string, any>
    >
  >;
  clearCart: () => void;
  clearPaymentIntent: () => void;
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
  clearCart: () => {
    return;
  },
  clearPaymentIntent: () => {
    return;
  },
});
