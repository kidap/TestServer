import express  from 'express'
import user from './src/routes/user'
import players from './src/routes/players'
import bodyparser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

let port = process.env.PORT

app.use('/user', user)
app.use('/players', players)

app.listen(port, () => {
    console.log('Listening to localhost:' + port)
})