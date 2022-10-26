import { Ctx, Query, Resolver } from 'type-graphql';
import { Product } from '@generated/type-graphql';
import { AppContext } from '../types/AppContext';

@Resolver(Product)
export class ProductResolver {
  @Query(() => [Product])
  async products(@Ctx() { db }: AppContext): Promise<Product[]> {
    return db.product.findMany();
  }
}
