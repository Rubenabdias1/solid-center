import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';

export type AppContext = {
  req: Express.Request;
  res: Express.Response;
  prisma: PrismaClient;
  stripe: Stripe;
};
