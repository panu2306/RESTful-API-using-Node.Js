const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Handling GET resuest to /products'
	});
});

router.post('/', (req, res, next) => {
	res.status(200).json({
		message: 'Handling POST resuest to /products'
	});
});

router.get('/:productId', (req, res, next) => {
	const id = req.params.productId;
	if(id == 'specialId'){
		res.status(200).json({
			message: 'You received Special ID'
		});
	}
	else{
		res.status(200).json({
			message: 'You recieved another ID'
		});
	}
});

router.patch('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'You are in UPDATE request'
	});
});

router.delete('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'You are in DELETE request'
	});
});


module.exports = router;
