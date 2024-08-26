// authenticate.js
require('dotenv').config();

function authenticate(req, res, next) {

    const endpoint = req.originalUrl;
    const apiKey = req.headers[process.env.API_KEY_NAME]; 
    if (apiKey && apiKey === process.env.API_KEY) {
        return next();
    } else {
        return res.status(403).send('Unauthorized');
    }
}


module.exports = { authenticate };
