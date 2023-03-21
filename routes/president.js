const express = require('express');
const router = express.Router();

const { requiresAuth } = require('express-openid-connect');
//const presidentController = require('../controllers/president');
const presidentController = require('../controllers/president');

router.get('/', requiresAuth(), presidentController.getAll);

router.get('/:presidentId', presidentController.getPresident);

router.post('/', presidentController.create);

router.put('/:presidentId', presidentController.updatePresident);

router.delete('/:presidentId', presidentController.deletePresident);

module.exports = router;
