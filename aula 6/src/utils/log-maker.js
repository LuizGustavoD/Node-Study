import logSymbols from 'log-symbols';


async function logMaker(text, colorFunction) {
  const coloredText = await colorFunction(text);
  console.log(`${logSymbols.info} ${coloredText}`);
}

export { logMaker };