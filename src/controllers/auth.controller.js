import {
	userExists,
	registerNewUser,
	loginOneUser,
} from '../services/auth.services.js'
import {
	handlerHttp,
	missingData,
	userAlreadyExists,
	userNotFound,
} from '../utils/error.handler.js'

export const registerUser = async (req, res) => {
	try {
		const { email, password, username } = req.body
		const exist = await userExists(email)
		if (!email || !password || !username) {
			return missingData(res)
		}
		if (exist) {
			return userAlreadyExists(res, email)
		}
		const userCreated = await registerNewUser(email, password, username)
		res.status(201).json(userCreated)
	} catch (error) {
		handlerHttp(res, error)
	}
}

export const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body
		const exist = await userExists(email)
		if (!exist) {
			return userNotFound(res)
		}
		const userLogged = await loginOneUser(email, password)
		res.status(200).json(userLogged)
	} catch (error) {
		handlerHttp(res, error)
	}
}
