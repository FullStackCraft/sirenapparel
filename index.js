'use strict';

var http = require('http');
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const path = require('path');
var cors = require('cors')
const app = express();
const nodemailer = require('nodemailer');
var oBodyParser = require('body-parser');
var oServer = http.createServer(app);
var oCorsOptions = {
  origin: ['http://sirenapparel.us', 'http://localhost:3000']
}
app.use(cors(oCorsOptions));

let oTransporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'sirenapparel@gmail.com',
        pass: process.env.SIREN_APPAREL_GMAIL_PASSWORD
    }
});
let oMailOptions = {
  from: 'sirenapparel@gmail.com', // sender address
  to: 'sirenapparel@gmail.com' // list of receivers
};

// oBodyParser to get posts from $.ajax
app.use(oBodyParser.json());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.post('/new-message', (req, res) => {
  console.log(req.body);
  oMailOptions.subject = 'Siren Apparel - New Message from the sirenapparel.us Homepage message box!'; // Subject line
  oMailOptions.html = "Name: " + req.body.sFirstName + " " + req.body.sLastName + "<br/>Email: " + req.body.sEmail + "<br/>Phone: " + req.body.sPhone + "<br/><br/>Message:<br/>" + req.body.sMessage; // plain text body
  console.log(oMailOptions);
  oTransporter.sendMail(oMailOptions, function (err, info) {
     if (err) {
       console.log(err);
     } else {
       console.log(info);
     }
  });
  res.sendStatus(200); // everything OK
});

app.post('/user-location', (req, res) => {
  let sIP_STACK_API_KEY = process.env.IP_STACK_API_KEY;
  let sIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(sIP);
  axios.get("http://api.ipstack.com/" + sIP + "?access_key=" + sIP_STACK_API_KEY + "&format=1")
    .then(function (oResponse) {
      console.log(oResponse.data);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ sIsoAlpha2Code: oResponse.data.country_code }));
    })
    .catch(function (error) {
      res.sendStatus(500); // send server error
    });
})

// Serve static assets
app.use(express.static('./build'));

// listening ports - reverse proxyed from nginx nlp-champs.com
oServer.listen(8082); // chrisfrew.in productions - sirenapparel.us is fixed at 8082