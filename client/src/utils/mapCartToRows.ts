import { CartItem } from './cartContext';

export const mapCartToRows = (cart: CartItem[]) =>
  cart.map(
    (
      { product: { id, name, price, imgURL, ...product }, quantity },
      index
    ) => ({
      id,
      name,
      price,
      quantity,
      imgURL,
      index,
      data: product,
    })
  );

export type CartRows = ReturnType<typeof mapCartToRows>[0];
