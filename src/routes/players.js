import express from 'express'
import { request } from 'https';

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Player routes')
})


router.get('/:team', (req, res) => {

    if (req.params.team === 'spurs') {

        const spurs = []

        const tony = {
            "name": "Tony Parker",
            "number": "9"
        }

        const manu = {
            "name": "Manu Ginobili",
            "number": "20"
        }

        const tim = {
            "name": "Tim Duncan",
            "number": "21"
        }

        spurs.push(tony, manu, tim)


        res.json(spurs)
    } else {
        res.send('What team?')
    }
})

module.exports = router