import jsonwebtoken from 'jsonwebtoken'
import { JWT_SECRET } from '../config.js'

export const generateToken = (id) => {
	const jwt = jsonwebtoken.sign({ id }, JWT_SECRET, {
		expiresIn: '2h',
	})
	return jwt
}

export const verifyToken = (jwt) => {
	const verification = jsonwebtoken.verify(jwt, JWT_SECRET)
	return verification
}
