'use strict';

var http = require('http');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
var cors = require('cors')
const app = express();
const nodemailer = require('nodemailer');
var oBodyParser = require('body-parser');
var oServer = http.createServer(app);
var oCorsOptions = {
  origin: 'http://sirenapparel.us',
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
  oMailOptions.subject = 'Siren Apparel - New Message from sirenapparel.us from ' + req.body.sFirstName + ' ' + req.body.sLastName + ' ' + req.body.sEmail + ' ' + req.body.sPhone; // Subject line
  oMailOptions.html = req.body.sMessage; // plain text body
  console.log(oMailOptions);
  oTransporter.sendMail(oMailOptions, function (err, info) {
     if (err) {
       console.log(err);
     } else {
       console.log(info);
     }
  });
  res.send(200); // everything OK
});

// Serve static assets
app.use(express.static('./build'));

// listening ports - reverse proxyed from nginx nlp-champs.com
oServer.listen(8082); // chrisfrew.in productions - sirenapparel.us is fixed at 8082