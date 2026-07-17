import { Email } from "../models/emailModel";




async function getBaseEmail(email:Email): Promise<Email> {
  return {
    Sender: email.Sender,
    Receiver: email.Receiver,
    Body: email.Body
  }
}

export { getBaseEmail };