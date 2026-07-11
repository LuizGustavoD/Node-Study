import { initialSetup } from "../config/setup.js";

const config = initialSetup();

console.log(`Starting ${config.appName} version ${config.version} in ${config.environment} mode.`);