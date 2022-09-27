import * as chalk from 'chalk';
import * as express from 'express';
// import { createServer } from 'http';
import { PORT } from './constants';

const app = express();
async function main() {
  // const httpServer = createServer(app);

  await new Promise<void>((resolve) => {
    app.listen(PORT, () => {
      console.log(
        [
          chalk.bgMagentaBright.black.bold(' GraphQL API listening on   '),
          chalk.bgWhite.black(`\thttp://localhost:${PORT}\t`),
        ].join(' ')
      );
      resolve();
    });
  });
}

main().catch(console.error);
