const express = require('express')
require("dotenv").config()
const app = express()
const port = 3000
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.get("/", (req, res) => {
    client.messages.create({
        body: 'Mensaje de prueba de Christian', from: 'whatsapp:+14155238886', to: 'whatsapp:+56984385976'
    }).then(message => console.log(message.sid));
})
