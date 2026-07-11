import createConnection from './db/connect.js'

async function main(){
  await createConnection("admin", "admin");


  console.log("Sucesso");
}

main();