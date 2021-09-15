const express = require('express');

const serviceController = require('../controllers/service');

const router = express.Router();

router.get('/:services', serviceController.getServices);
router.post('/:services', serviceController.saveService);

module.exports = router;