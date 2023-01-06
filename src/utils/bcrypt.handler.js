import bcrypt from 'bcryptjs'

export const encrypt = async (password) => {
	const hashedPassword = bcrypt.hash(password, 8)
	return hashedPassword
}

export const verifyPassword = async (password, hashedPassword) => {
	const comparison = await bcrypt.compare(password, hashedPassword)
	return comparison
}
