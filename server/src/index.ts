import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import { createApolloServer } from './apollo-server';
import * as chalk from 'chalk';
import { PORT } from './constants';
import * as express from 'express';
import { createServer } from 'http';
import createSession from './session';

const prisma = new PrismaClient();

const app = express();
app.set('trust proxy', 1); // trust first proxy
app.use(createSession(prisma));
async function main() {
  const httpServer = createServer(app);
  const apolloServer = await createApolloServer(prisma, httpServer, app);

  await new Promise<void>((resolve) => {
    app.listen(PORT, () => {
      console.log(
        [
          chalk.bgMagentaBright.black.bold(' GraphQL API listening on   '),
          chalk.bgWhite.black(
            `\thttp://localhost:${PORT}${apolloServer.graphqlPath}\t`
          ),
        ].join(' ')
      );
      resolve();
    });
  });
}

main().catch(console.error);
