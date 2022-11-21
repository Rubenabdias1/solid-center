import Button from '@mui/material/Button';
import { formatCurrency } from '../../utils/formatCurrency';
import { getTotal } from '../../utils/cart';
import { CartContext } from '../../utils/cartContext';
import { useContext } from 'react';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';

export const CheckoutForm = () => {
  const { cart } = useContext(CartContext);
  const total = getTotal(cart);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    console.log('I am here');
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/complete`,
      },
    });
    if (result.error) {
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button type="submit" variant="contained" style={{ width: '100%' }}>
        PAY {formatCurrency(total)}
      </Button>
    </form>
  );
};
