'use strict';

const http = require('http');
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const axios = require('axios');
const path = require('path');
const sha3_512 = require('js-sha3').sha3_512;
const uniqid = require('uniqid');
const { Client } = require('pg');
const cors = require('cors')
const app = express();
const nodemailer = require('nodemailer');
const oBodyParser = require('body-parser');
const oServer = http.createServer(app);
const oCorsOptions = {
  origin: ['http://sirenapparel.us', 'http://localhost:3000']
}
const redirect = require("express-redirect");
redirect(app);
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

// oBodyParser to get JSON posts from frontend
app.use(oBodyParser.json());

// connect to sirenapparel postgres ( on dell )
// const client = new Client({
//   user: process.env.SIREN_APPAREL_DB_USER,
//   host: process.env.SIREN_APPAREL_DB_HOST,
//   database: process.env.SIREN_APPAREL_DB,
//   password: process.env.SIREN_APPAREL_DB_PASSWORD,
//   port: process.env.SIREN_APPAREL_DB_PORT,
// });
// client.connect();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// post routes
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

app.post('/user-country', (req, res) => {
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
});

// app.post('/new-email', (req, res) => {
//   let iCountRows = 0;
//   // first check if this email exists
//   var sQuery = 'SELECT email FROM emails WHERE email = \'' + req.body.sEmail + '\';'
//   client.query(sQuery, (err, pg_res) => {
//     if (err) {
//       console.log(err.stack)
//     } else {
//       iCountRows = pg_res.rows.length;
//       if (iCountRows > 0) {
//         var response = {
//             status  : 200,
//             info : 'Email already recorded',
//             bAlreadyHaveEmail: true
//         };
//         res.send(JSON.stringify(response));
//       } else {
//         const sSalt = uniqid(); // each salt for each email should be unique
//         const sHashSaltEmail = sha3_512(sSalt + req.body.sEmail); //  created a salted hash with the generated salt and email
//       	sQuery = {
//       		text: 'INSERT INTO emails (email, utc_timestamp, salt, hash_salt_email) VALUES($1, $2, $3, $4)',
//       		values: [req.body.sEmail, new Date().toISOString(), sSalt, sHashSaltEmail]
//       	};
//       	client.query(sQuery, (err, pg_res) => {
//       		if (err) {
//       			console.log(err.stack);
//       		} else {
//       			var response = {
//       			    status  : 200,
//       			    info : 'Email recorded successfully',
//                 bAlreadyHaveEmail: false
//       			};
//       			res.send(JSON.stringify(response));
//       		  console.log('Saved to DB!');
//       		}
//       	});
//       }
//     }
//   });
// });
// // links in unsubscribe newsletter are like https://sirenapparel.us/unsubscribe?ref=ajskd346lghj232yiu56b3cgh24455s
// app.post('/unsubscribe*', (req, res) => {
//   if (req.query.ref.includes("*")) { // prevent any wildcard at any position in the email
//     var response = {
//         status  : 200,
//         info : 'Error - bad query'
//     };
//     res.send(JSON.stringify(response));
//     return;
//   }
//   var sQuery = 'DELETE FROM emails WHERE hash_salt_email = \'' + req.query.ref + '\';'
//   client.query(sQuery, (err, pg_res) => {
//     if (err) {
//       console.log(err.stack)
//       var response = {
//           status  : 200,
//           info : 'Error in DB with removing email'
//       };
//       res.send(JSON.stringify(response));
//     } else {
//       var response = {
//           status  : 200,
//           info : 'Email removed successfully'
//       };
//       res.send(JSON.stringify(response));
//       console.log('Removed from DB!');
//     }
//   });
// });

// sample code left here of how to send an unsubscribe link in the newsletters:
// oMailOptions.subject = 'Siren Apparel - Example Test Newsletter!'; // Subject line
// oMailOptions.html = '<a href="http://localhost:3000/unsubscribe?ref=' + sHashSaltEmail + '">Unsubscribe from these totally cool emails</a>'; // plain text body
// console.log(oMailOptions);
// oTransporter.sendMail(oMailOptions, function (err, info) {
//    if (err) {
//      console.log(err);
//    } else {
//      console.log(info);
//    }
// });

// any sirenapparel.us/blog or sirenapparel.eu/blog will redirect to our medium blog
// app.redirect(
//   "/blog",
//   "https://medium.com/@sirenapparel"
// );

// Serve static assets
app.use(express.static('./build'));

// listening ports - reverse proxyed from nginx nlp-champs.com
oServer.listen(8082); // chrisfrew.in productions - sirenapparel.us is fixed at 8082