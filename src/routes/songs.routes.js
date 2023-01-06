import { Router } from 'express'
import {
	getSongs,
	getSong,
	createSong,
	deleteSong,
	updateSong,
} from '../controllers/songs.controller.js'
import { checkJWT } from '../middlewares/session.js'

const router = Router()

router.get('/songs', /*checkJWT,*/ getSongs)
router.get('/songs/:id', /*checkJWT,*/ getSong)
router.post('/songs', /*checkJWT,*/ createSong)
router.delete('/songs/:id', /*checkJWT,*/ deleteSong)
router.put('/songs/:id', /*checkJWT,*/ updateSong)

export default router
