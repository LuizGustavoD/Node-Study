import { getBaseEmail } from "./services/email";


async function main() {
  const email = await getBaseEmail({
    Sender: "email@email@gmail.com",
    Receiver: "teste",
    Body: "teste"
  });

  console.log(email);
}

main();