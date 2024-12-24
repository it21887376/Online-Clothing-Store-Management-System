const express = require('express');
const router = express.Router()
const {
  addPromo,
  getPromotionById,
  updatePromotion,
  getAllPromotion,
  deletePromotion
} = require('../controllers/promotion.controller')

router.route('/').post(addPromo)
router.route('/').get(getAllPromotion)
router.route('/:id').get(getPromotionById)
router.route('/:id').put(updatePromotion)
router.route('/:id').delete(deletePromotion)

module.exports = router;

