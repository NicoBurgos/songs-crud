import { verifyToken } from '../utils/jwt.handler.js'

export const checkJWT = (req, res, next) => {
	try {
		const jwtUser = req.headers.authorization || ''
		const jwt = jwtUser.split(' ').pop()
		const verifyUser = verifyToken(`${jwt}`)
		if (!verifyUser) {
			res.status(401).json({
				error: 401,
				message: 'Invalid JWT',
			})
		} else {
			req.user = verifyUser
			next()
		}
	} catch (e) {
		res.status(400).json({
			error: 400,
			message: 'Invalid session',
		})
	}
}
