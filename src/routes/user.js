import express from 'express'
import db from '../database/db'
import userService from '../service/user'

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('User router')
    next()
})


router.post('/signup', (req, res) => {
    console.log(req.body)
    let username = req.body.username
    let password = req.body.password

    userService.createUser(username, password)
    .then( ({ rows }) => {

        const jsonResponse = {
            username,
            password,
            "rawResponse": rows
        }

        res.json(jsonResponse)
    })
    .catch( (e) => {
        console.log(e)
        res.send('Error')
    })   
})


module.exports = router 