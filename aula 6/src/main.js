import chalk from 'chalk';

import { toBlue, toRed, toGreen } from './utils/colors-change.js';
import { logMaker } from './utils/log-maker.js';

async function main() {
  const blueText = await toBlue('This text is blue');
  const redText = await toRed('This text is red');
  const greenText = await toGreen('This text is green');

  await logMaker(blueText, chalk.blue);
  await logMaker(redText, chalk.red);
  await logMaker(greenText, chalk.green);
}

main();


