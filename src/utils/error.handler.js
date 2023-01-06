export const badRequest = (res) => {
	return res.status(400).json({
		error: 400,
		message: 'Bad Request',
	})
}

export const handlerHttp = (res, error) => {
	return res.status(500).json({
		error: 500,
		message: 'Something goes wrong with the database',
	})
}

export const songNotFound = (res) => {
	return res.status(404).json({
		error: 404,
		message: 'Song not found',
	})
}

export const songAlreadyExists = (res, name) => {
	return res.status(409).json({
		error: 409,
		message: `Song ${name} already exists`,
	})
}

export const userNotFound = (res) => {
	return res.status(404).json({
		error: 404,
		message: 'User not found',
	})
}

export const userAlreadyExists = (res, email) => {
	return res.status(409).json({
		error: 409,
		message: `User ${email} already exists`,
	})
}

export const missingData = (res) => {
	return res.status(422).json({
		error: 422,
		message: `Missing data`,
	})
}
