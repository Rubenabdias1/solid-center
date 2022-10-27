import { Arg, Ctx, Int, Query, Resolver } from 'type-graphql';
import { Product } from '@generated/type-graphql';
import { AppContext } from '../types/AppContext';

@Resolver(Product)
export class ProductResolver {
  @Query(() => Product, { nullable: true })
  async product(
    @Arg('id', () => Int) id: number,
    @Ctx() { prisma }: AppContext
  ) {
    return prisma.product.findUnique({ where: { id } });
  }
}
