async function mainTS(){
  let userEmail:UserEmail = {
    from: "email@teste.com",
    subject: "Teste",
    to: "email2@teste.com"
  }

  let body:String = "Hello, this is a test email.";

  await sendEmailTS(userEmail, body);
}

type UserEmail = {
  from: string;
  subject: string;
  to: string;
}

async function sendEmailTS(userEmail:UserEmail, body:String){

  const mail = userEmail.from;
  const subject = userEmail.subject;
  const to = userEmail.to;
  const currentBody = body;

  console.log(`Sending email from: ${mail}`);

}

mainTS();