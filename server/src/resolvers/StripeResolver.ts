import {
  Arg,
  Ctx,
  Field,
  Float,
  Mutation,
  ObjectType,
  registerEnumType,
  Resolver,
} from 'type-graphql';
import { AppContext } from '../types/AppContext';

enum PaymentMethod {
  acss_debit,
  affirm,
  afterpay_clearpay,
  alipay,
  au_becs_debit,
  bacs_debit,
  bancontact,
  blik,
  boleto,
  card,
  card_present,
  customer_balance,
  eps,
  fpx,
  giropay,
  grabpay,
  ideal,
  interac_present,
  klarna,
  konbini,
  link,
  oxxo,
  p24,
  paynow,
  pix,
  promptpay,
  sepa_debit,
  sofort,
  us_bank_account,
  wechat_pay,
}

registerEnumType(PaymentMethod, {
  name: 'PaymentMethodTypes', // this one is mandatory
  description: 'The acceptable Payment Methods', // this one is optional
});

@ObjectType()
class PaymentIntentResponse {
  @Field(() => Boolean)
  success!: boolean;
  @Field(() => String, { nullable: true })
  secret?: string | null;
}

@Resolver()
export class StripeResolver {
  @Mutation(() => PaymentIntentResponse, { nullable: true })
  async createPaymentIntent(
    @Arg('id', () => PaymentMethod) id: PaymentMethod,
    @Arg('amount', () => Float) amount: number,
    @Ctx() { stripe }: AppContext
  ): Promise<PaymentIntentResponse> {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.floor(amount * 100),
        currency: 'usd',
        payment_method_types: [PaymentMethod[id] || 'card'],
      });
      return { success: true, secret: paymentIntent.client_secret };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  }
}
