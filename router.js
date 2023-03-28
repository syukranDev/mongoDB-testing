const express = require('express')
const router = express.Router()

const EmployeeController = require('./controllers/EmployeeController')

router.get('/', EmployeeController.index)
router.post('/single', EmployeeController.show)
router.post('/add', EmployeeController.add)
router.post('/update', EmployeeController.update)
router.post('/delete', EmployeeController.remove)

module.exports = router