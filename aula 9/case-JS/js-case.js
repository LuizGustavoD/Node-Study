async function main(){
  sendEmail("email", "body");
}

// Vai dar um erro de runtime, uma vez que o JS não te alerta sobre a diferença de tipagem de variáveis, e o parâmetro "body" está sendo sobrescrito dentro da função sendEmail.


async function sendEmail(userEmail, body){

  const mail = userEmail.from;
  const subject = userEmail.subject;
  const to = userEmail.to;
  const body = body;

  console.log(`Sending email to: ${to}`);

}

main();