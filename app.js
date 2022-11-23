const express = require('express')
var cors = require('cors')
require("dotenv").config()
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.post("/", (req, res) => {
    const phone = req.body.number
    const message = req.body.message
    client.messages.create({
        body: message, from: 'whatsapp:+14155238886', to: `whatsapp:${phone}`
    }).then(message => res.send(message));
})
