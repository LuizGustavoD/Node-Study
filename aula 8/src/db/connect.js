async function createConnection(user, password) {

  const url = process.env.URL_BANCO;
  const userEnv = process.env.USER_BANCO;
  const passwordEnv = process.env.PASSWORD_BANCO;
  const permitConnection = false;

  if (user === userEnv && password === passwordEnv) {
    console.log('Autenticação FEITA!');
    permitConnection = true;
  }
  else {
    console.log('Autenticação FALHOU!');
  }

  if (permitConnection) {
    console.log("Criando conexão com " + url);
  }

}

export default createConnection;