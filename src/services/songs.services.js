import pool from '../database/db.js'

export const isSameSong = async (id, name, author) => {
	const songId = await pool.query('SELECT * FROM songs WHERE id = $1', [id])
	const songName = await pool.query(
		'SELECT * FROM songs WHERE name = $1 AND author = $2',
		[name, author]
	)
	if (songId.rows[0].id == songName.rows[0].id) {
		return true
	} else {
		return false
	}
}

export const songExists = async (name, author) => {
	try {
		const data = await pool.query(
			'SELECT * FROM songs WHERE name = $1 AND author = $2',
			[name, author]
		)
		if (data.rows.length < 1) {
			return false
		} else {
			return true
		}
	} catch (error) {
		return false
	}
}

export const songExistsById = async (id) => {
	try {
		const data = await pool.query('SELECT * FROM songs WHERE id = $1', [id])
		if (data.rows.length > 0) {
			return true
		} else {
			return false
		}
	} catch (error) {
		return false
	}
}

export const getAllSongs = async () => {
	const allSongs = await pool.query('SELECT * FROM songs')
	return allSongs.rows
}

export const getOneSong = async (id) => {
	const song = await pool.query('SELECT * FROM songs WHERE id = $1', [id])
	return song.rows
}

export const createOneSong = async (
	name,
	author,
	album,
	duration_ms,
	img,
	yt_link
) => {
	const data = await pool.query(
		'INSERT INTO songs (name, author, album, duration_ms, img, yt_link) VALUES ($1, $2, $3, $4, $5, $6)',
		[name, author, album, duration_ms, img, yt_link]
	)
	const result = {
		message: `Song ${name} added successfully`,
		name,
		author,
		album,
		duration_ms,
		img,
		yt_link,
	}
	return result
}

export const deleteOneSong = async (id) => {
	const data = await pool.query('DELETE FROM songs WHERE id = $1', [id])
	return data
}

export const updateOneSong = async (
	id,
	name,
	author,
	album,
	duration_ms,
	img,
	yt_link
) => {
	const data = await pool.query(
		'UPDATE songs SET name = $2, author = $3, album = $4, duration_ms = $5, img = $6, yt_link = $7 WHERE id = $1',
		[id, name, author, album, duration_ms, img, yt_link]
	)
	return data
}
