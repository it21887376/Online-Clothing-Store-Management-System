const express = require('express');
const router = express.Router()
const {
    addEmplyees,
    getEmplyeeById,
    updateEmployee,
    getAllEmployees,
    deleteEmployee
} = require('../controllers/employee.controller')

router.route('/').post(addEmplyees)
router.route('/').get(getAllEmployees)
router.route('/:id').get(getEmplyeeById)
router.route('/:id').put(updateEmployee)
router.route('/:id').delete(deleteEmployee)

module.exports = router;

