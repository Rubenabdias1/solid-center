import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const PUBLIC_KEY =
  'pk_test_51Gv8S9H5l65jQ7mTfbAPVAurCDF1effKzNiG0Lsw5wsqa8Ctphhuk6pKt3JRQ7c3Qc1HqK8kizsDAGp02o2srsu800MwA5OfrO';
const stripe = loadStripe(PUBLIC_KEY);

export const StripeContainer = () => {
  return <Elements stripe={stripe}></Elements>;
};
