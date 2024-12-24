const express = require('express');
const router = express.Router()
const {
    addProduction,
    getProductionById,
    updateProduction,
    getAllProduction,
    deleteProduction
} = require('../controllers/production.controller')

router.route('/').post(addProduction)
router.route('/').get(getAllProduction)
router.route('/:id').get(getProductionById)
router.route('/:id').put(updateProduction)
router.route('/:id').delete(deleteProduction)

module.exports = router;

