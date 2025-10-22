const express = require('express');
const newsletterController = require('../controllers/newsletterController');
const router = express.Router();

router.post('/subscribe', newsletterController.subscribe);
router.post('/unsubscribe', newsletterController.unsubscribe);
router.get('/subscribers', newsletterController.getAllSubscribers);

module.exports = router;