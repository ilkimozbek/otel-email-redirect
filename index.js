/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

app.get('/', async function(req, res) {
    const addresses = ["info@anemonhotels.com","reservations@baruthotels.com","info@crystalhotels.com.tr","istanbulsatis@kayahotels.com.tr","brand@rixos.com"]
    const address_1 = addresses[Math.floor(Math.random() * addresses.length)]
    const address_2 = 'ilkim.ozbek@kafessizturkiye.com'
    

    let mail = `mailto:${address_1}?bcc=${address_2}`
    res.redirect(mail)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 

////\r\n
