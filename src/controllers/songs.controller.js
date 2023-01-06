import {
	getAllSongs,
	getOneSong,
	songExists,
	createOneSong,
	songExistsById,
	deleteOneSong,
	updateOneSong,
	isSameSong,
} from '../services/songs.services.js'
import {
	handlerHttp,
	songAlreadyExists,
	songNotFound,
	missingData,
} from '../utils/error.handler.js'

export const getSongs = async (req, res) => {
	try {
		const allSongs = await getAllSongs()
		res.json(allSongs)
	} catch (error) {
		handlerHttp(res, error)
	}
}

export const getSong = async (req, res) => {
	const id = req.params.id
	try {
		const song = await getOneSong(id)
		if (song.length < 1) {
			return songNotFound(res)
		}
		res.json(song)
	} catch (error) {
		handlerHttp(res, error)
	}
}

export const createSong = async (req, res) => {
	try {
		const { name, author, album, duration_ms, img, yt_link } = req.body

		if (!name || !author || !album || !duration_ms || !img || !yt_link) {
			return missingData(res)
		}

		const exist = await songExists(name, author)
		if (exist) {
			return songAlreadyExists(res, name)
		}
		const songCreated = await createOneSong(
			name,
			author,
			album,
			duration_ms,
			img,
			yt_link
		)
		res.status(201).json(songCreated)
	} catch (error) {
		handlerHttp(res, error)
	}
}

export const deleteSong = async (req, res) => {
	try {
		const id = req.params.id
		const exist = await songExistsById(id)
		if (!exist) {
			return songNotFound(res)
		}
		const deletedSong = await deleteOneSong(id)
		res.json({ message: `Song ${id} deleted successfully` })
	} catch (error) {
		handlerHttp(res, error)
	}
}

export const updateSong = async (req, res) => {
	try {
		const id = req.params.id
		const { name, author, album, duration_ms, img, yt_link } = req.body

		if (!name || !author || !album || !duration_ms || !img || !yt_link) {
			return missingData(res)
		}
		const existId = await songExistsById(id)
		const existSong = await songExists(name, author)
		const existSameSong = await isSameSong(id, name, author)
		if (!existId) {
			return songNotFound(res)
		}
		if (existSong && !existSameSong) {
			return songAlreadyExists(res, name)
		}
		const updatedSong = await updateOneSong(
			id,
			name,
			author,
			album,
			duration_ms,
			img,
			yt_link
		)
		res.json({ message: `Song ${id} updated successfully` })
	} catch (error) {
		handlerHttp(res, error)
	}
}
