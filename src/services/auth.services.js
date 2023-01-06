import { encrypt, verifyPassword } from '../utils/bcrypt.handler.js'
import { generateToken } from '../utils/jwt.handler.js'
import pool from '../database/db.js'

export const userExists = async (email) => {
	try {
		const data = await pool.query('SELECT * FROM users WHERE email = $1', [
			email,
		])
		if (data.rows.length < 1) {
			return false
		} else {
			return true
		}
	} catch (error) {
		return false
	}
}

export const registerNewUser = async (email, password, username) => {
	const hashedPassword = await encrypt(password)
	const newUser = await pool.query(
		'INSERT INTO users (email, username, password) VALUES ($1, $2, $3)',
		[email, username, hashedPassword]
	)
	const result = {
		message: `User ${username} added successfully`,
	}
	return result
}

export const loginOneUser = async (email, password) => {
	const data = await pool.query('SELECT * FROM users WHERE email = $1', [email])
	const hashedPassword = data.rows[0].password
	const verify = await verifyPassword(password, hashedPassword)
	let result
	if (!verify) {
		result = {
			error: 401,
			message: 'Invalid password',
		}
		return result
	} else {
		const token = generateToken(email)
		result = {
			token,
			user: data.rows[0],
		}
		return result
	}
}
