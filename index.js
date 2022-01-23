require('dotenv').config()

const geoip = require('geoip-lite');
const ip = "207.97.227.239";
const geo = geoip.lookup(ip);
const message = 'Este es un mensaje de auxilio, mi ubicación es: ' + geo.range;

const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN

const client = require('twilio')(accountSid, authToken)

client.messages.create({
  to: process.env.MY_PHONE_NUMBER,
  from: '+18632651429',
  body: message
}).then(message => console.log(message.sid))