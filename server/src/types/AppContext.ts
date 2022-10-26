import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';

export type AppContext = {
  db: PrismaClient;
  stripe: Stripe;
};
