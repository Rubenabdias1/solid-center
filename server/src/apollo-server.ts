import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ExpressContext, ApolloServer, Config } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { Server } from 'http';
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';
import { STRIPE_SECRET } from './constants';
import { StripeResolver } from './resolvers/StripeResolver';
import { AppContext } from './types/AppContext';
import { UserResolver } from './resolvers/UserResolver';
import {
  FindUniqueProductResolver,
  FindManyProductResolver,
  FindManyCategoryResolver,
  FindUniqueCategoryResolver,
  CreateOneOrderResolver,
} from '@generated/type-graphql';

const stripe = new Stripe(STRIPE_SECRET, {
  apiVersion: '2022-08-01',
});

async function startApolloServer(
  serverOptions: {
    httpServer: Server;
    app: express.Application;
    db: PrismaClient;
  },
  apolloOptions: {
    schemaWithResolvers: Exclude<Config<ExpressContext>['schema'], undefined>;
  }
): Promise<ApolloServer<ExpressContext>> {
  const { httpServer, app, db } = serverOptions;
  const { schemaWithResolvers } = apolloOptions;
  const server = new ApolloServer({
    schema: schemaWithResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: (ctx): AppContext => {
      return { prisma: db, stripe, ...ctx };
    },
  });
  await server.start();
  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: (_, next) => {
        next(null, true);
      },
    },
  });
  return server;
}

export async function createApolloServer(
  db: PrismaClient,
  httpServer: Server,
  app: express.Application
): Promise<ApolloServer<ExpressContext>> {
  // Add resolvers to the schema
  const schemaWithResolvers = await buildSchema({
    resolvers: [
      StripeResolver,
      FindUniqueProductResolver,
      FindManyProductResolver,
      FindManyCategoryResolver,
      FindUniqueCategoryResolver,
      CreateOneOrderResolver,
      UserResolver,
    ],
  });

  const apolloServer = await startApolloServer(
    { httpServer, app, db },
    { schemaWithResolvers }
  );
  return apolloServer;
}
