const Employee = require('../models/Employee')


//Show all list of employees
const index = (req, res) => {
    Employee.find()
    .then(resp => {
        res.json(resp)
    })
    .catch(err => {
        res.json({ message: 'An error occured!'})
    })
}


//Show single employees
const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(resp => {
        res.json({resp})
    })
    .catch(err => {
        res.json({ message: 'An error occured!' + err })
    })
}


//Store single employees
const add = (req, res) => {
    let employeeData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age

    }

    let employee = new Employee(employeeData)

    // console.log(employeeData)
    
    employee.save()
    .then(resp => {
        res.json({ 
            message: 'Employee added successfully!',
            queryData : employeeData
        })
    })
    .catch(err => {
        res.json({ message: 'An error occured: ' + err.message})
    })
}

//Update single employees
const update = (req, res) => {
    let employeeID = req.body.employeeID
    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    .then(resp => {
        res.json({ 
            message: 'Employee updated successfully!',
            queryData: updatedData
        })
    })
    .catch(err => {
        res.json({ message: 'An error occured!'})
    })
}

//delete single employee
const remove = (req, res) => {
    let employeeID = req.body.employeeID

    Employee.findByIdAndRemove(employeeID)
    .then(resp => {
        res.json({ 
            message: 'Employee deleted successfully!',
            queryData: employeeID
        })
    })
    .catch(err => {
        res.json({ message: 'An error occured!'})
    })
}

module.exports = { index, show, add, update, remove }