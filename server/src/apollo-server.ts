import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ExpressContext, ApolloServer, Config } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { Server } from 'http';
import { PrismaClient } from '@prisma/client';
import { UserCrudResolver } from '@generated/type-graphql';

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
    context: () => {
      return { db };
    },
  });
  await server.start();
  server.applyMiddleware({ app });
  return server;
}

export async function createApolloServer(
  db: PrismaClient,
  httpServer: Server,
  app: express.Application
): Promise<ApolloServer<ExpressContext>> {
  // Add resolvers to the schema
  const schemaWithResolvers = await buildSchema({
    resolvers: [UserCrudResolver],
  });

  const apolloServer = await startApolloServer(
    { httpServer, app, db },
    { schemaWithResolvers }
  );
  return apolloServer;
}
