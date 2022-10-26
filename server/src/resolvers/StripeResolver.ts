import {
  Arg,
  Ctx,
  Field,
  Float,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { AppContext } from '../types/AppContext';

@ObjectType()
class PaymentIntentResponse {
  @Field(() => String, { nullable: true })
  clientSecret?: string | null;
}

@Resolver()
export class StripeResolver {
  @Query(() => PaymentIntentResponse, { nullable: true })
  async createPaymentIntent(
    @Arg('amount', () => Float) amount: number,
    @Ctx() { stripe }: AppContext
  ): Promise<PaymentIntentResponse> {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    return { clientSecret: paymentIntent.client_secret };
  }
}
