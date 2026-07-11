import { getModules } from "../modules/modules.mjs";

export async function setupRoutes(app) {
  const modules = await getModules();
  modules.forEach((module) => {
    const route = require(`../modules/${module.name}/routes.js`);
    app.use(`/${module.name}`, route);
  });
}

