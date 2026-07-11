import chalk from 'chalk';


async function toBlue(text) {
  return chalk.blue(text);
}

async function toRed(text) {
  return chalk.red(text);
}

async function toGreen(text) {
  return chalk.green(text);
}

export { toBlue, toRed, toGreen };