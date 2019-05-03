// import db from '../database/db'
import { Pool, Client } from 'pg'
import bcrypt from 'bcrypt'
import uuidv4 from 'uuid/v4'


const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

pool.on('connect', () => {
    console.log('connected to the db');
});

const createUser = async (username, password) => {

    let hashedPassword = bcrypt.hashSync(password, 8)

    const createQuery = `INSERT INTO
    users(id, email, password, created_date, modified_date)
    VALUES($1, $2, $3, $4, $5)
    returning *`;

    const values = [
            uuidv4(),
            username,
            hashedPassword,
            new Date(),
            new Date()
        ]

    const result = await pool.query(createQuery, values)
    console.log(result)

    await pool.end()

    return result.rows
}

module.exports = {
    createUser
}