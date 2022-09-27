import { Stripe } from 'stripe';
import { STRIPE_SECRET } from '../../constants';

const stripe = new Stripe(STRIPE_SECRET, { apiVersion: '2022-08-01' });

export const intentPayment = (
  id: string | undefined,
  description: string,
  amount: number
) => {
  return stripe.paymentIntents.create({
    amount,
    currency: 'USD',
    description,
    payment_method: id,
    confirm: true,
  });
};
