const express = require('express');
const twilio = require('twilio');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(express.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.post('/make-call', async (req, res) => {
  const { to, twimlUrl } = req.body;
  const from = process.env.TWILIO_PHONE_NUMBER;  // Ensure this is correctly set

  try {
    const call = await client.calls.create({
      url: twimlUrl,
      to,
      from,
    });
    res.status(200).send({ sid: call.sid });
  } catch (error) {
    console.error('Error making call:', error);
    res.status(500).send({ error: error.message });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
