import { attemptSend } from '../../utils/nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
  const data = req.body;
  if (data.msg == '' || data.name == '' || data.email == '') {
    res.status(200).json({ message: 'Could not send empty form.' });
    return;
  }
  try {
    if (await attemptSend(data)) {

    res.status(200).json({ message: 'Form submitted successfully!' });
    } else {
        res.status(200).json({ message: 'Failed to send.' });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
}
}