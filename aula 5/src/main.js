import { setupRoutes } from "./routes/products-controller";


async function startServer() {
  const express = require('express');
  const app = express();
  const port = 3000;

  await setupRoutes(app);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

startServer();