const express = require('express');

const serviceController = require('../controllers/general');

const router = express.Router();

router.get('/:services', serviceController.getServices);
router.post('/:services', serviceController.saveService);
router.patch('/:services', serviceController.editService);


module.exports = router;