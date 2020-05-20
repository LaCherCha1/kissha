const express = require("express")
const router = express.Router()
const { Properties } = require('../helpers/functions')
const table = require('../models/users')
const addresses = require('../models/address')


table.hasMany(addresses)
addresses.belongsTo(table)


router.get('/', (req, res) => {
    table.findAll({
        include: addresses
    }).then(data => {
        if (data !== null) {
            res.json({
                status: true,
                message: "Ok",
                data: data
            })
        } else {
            res.json({
                status: false,
                message: `No data found`
            })
        }
    })

})

router.get('/:id', (req, res) => {
    const { id } = req.params
    table.findOne({
        include: addresses,
        where: { id }
    }).then(data => {
        if (data !== null) {
            res.json({
                status: true,
                message: "Ok",
                data: data
            })
        } else {
            res.json({
                status: false,
                message: `No data found`
            })
        }
    })

})

router.post('/', (req, res) => {
    const data = Properties(req.body)
    table.create(data).then(err => {
        if (err == 1) {
            res.json({
                status: true,
                message: "created"
            })
        } else {
            res.json({
                status: false,
                message: "No created"
            })
        }
    })
})

router.patch('/:id', (req, res) => {
    const { id } = req.params
    const data = Properties(req.body)
    const query = table.update(data, {
        where: { id }
    })
        .then(err => {
            if (err == 1) {
                res.json({
                    status: true,
                    message: "Updated"
                })
            } else {
                res.json({
                    status: false,
                    message: "No updated"
                })
            }
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    table.delete({
        where: { id }
    }).then(err => {
        if (err == 1) {
            res.json({
                status: true,
                message: "Deleted"
            })
        } else {
            res.json({
                status: false,
                message: "No deleted"
            })
        }
    })
})

module.exports = router