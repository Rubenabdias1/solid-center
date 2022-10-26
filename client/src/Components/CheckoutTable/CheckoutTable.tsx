import Button from '@mui/material/Button';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

type CheckoutTableProps = { className?: string };

export const CheckoutTable: React.FC<CheckoutTableProps> = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    });
    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td align="right">$700.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontWeight: 500,
                      fontSize: '20px',
                      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif`,
                    },
                  },
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Button
                type="submit"
                variant="contained"
                style={{ width: '100%' }}
              >
                Proceed to Checkout
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
};
