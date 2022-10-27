import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';

export type AppContext = {
  prisma: PrismaClient;
  stripe: Stripe;
};
