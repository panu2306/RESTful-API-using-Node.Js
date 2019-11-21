const express = require('express');
router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'GET request for orders'
	});
});

router.post('/', (req, res, next) => {
	res.status(201).json({
		message: 'POST request for orders'
	});
});

router.get('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'GET request for perticular order',
		orderId: req.params.orderId
	});
});

router.patch('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'PATCH request for particular order',
		orderId: req.params.orderId
	});
});

router.delete('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'DELETE request for order',
		orderId: req.params.orderId
	});
});

module.exports = router;
