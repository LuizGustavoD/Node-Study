
async function getProducts(codeId, productName) {
  console.log("Buscando produtos...");
  console.log("Produtos encontrados!");
  return "Seu Pedido: " + codeId + " - " + productName;

}

async function getProductById(codeId) {
  console.log("Buscando produto por ID...");
  console.log("Produto encontrado!");
  return "Seu Pedido: " + codeId;
}

module.exports = {
  getProducts,
  getProductById
};