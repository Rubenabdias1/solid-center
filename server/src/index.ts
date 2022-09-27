import * as chalk from 'chalk';

async function main() {
  console.log(
    [
      chalk.bgBlueBright.white.bold(' Building UI and serving on '),
      chalk.bgWhite.black('\thttp://localhost:1234\t\t'),
    ].join(' ')
  );

  await new Promise<void>((res) => res());
}

main().catch(console.log);
