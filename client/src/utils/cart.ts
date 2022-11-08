import { CartItem } from './cartContext';

export const retrieveCart = () =>
  JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];

export const saveCart = (cart: CartItem[]) =>
  localStorage.setItem('cart', JSON.stringify(cart));

export const addItemToCart = (cart: CartItem[], newItem: CartItem) => {
  const newCart = [...cart];
  const itemFound = newCart.filter(
    (item) => item.product.id === newItem.product.id
  )[0];

  if (itemFound) {
    itemFound.quantity += newItem.quantity;
    return newCart;
  }
  newCart.push(newItem);
  return newCart;
};

export const getTotal = (cart: CartItem[]) =>
  cart.reduce(
    (prev, current) => prev + current.quantity * current.product.price,
    0
  );
