const productModel = require("./models/product");
const  p  = require("./services/service/products");
const c  = require("./db/db");

async function main() {

  const product = await p.getProducts(1, "Produto 1");
  const productById = await p.getProductById(1);
  const productModelData = productModel.product;

  const c.connectToDatabase("mongodb://localhost:27017/mydatabase");
  const c.connectToDatabaseAF("mongodb://localhost:27017/mydatabase");

}

main();