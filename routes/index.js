const express = require('express');
const router = express.Router();
//use api-docs
router.use('/api-docs', require('./swagger'));
router.use('/president', require('./president'));
//router.use('/theme', require('./theme'));

//after finished the login to auth0 , then the auth0 will redirect to the 
//call back URl https://cse341lesson7.onrender.com/callback 
//which we have put manually to the auth0 admin panel precisely to the place where
// you opened your Auth0 account, DOMAIN ,get the clientId, clientSECRETaccount  (called :ALLOWED CALLBACK URLs)
router.post('/callback', (req, res) => {
    res.status(200).send(res.oidc.user)
});

router.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});

module.exports = router;
