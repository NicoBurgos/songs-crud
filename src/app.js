import express from 'express'
import cors from 'cors'
import indexRoutes from './routes/index.routes.js'
import songsRoutes from './routes/songs.routes.js'
import authRoutes from './routes/auth.routes.js'
import { badRequest } from './utils/error.handler.js'

const app = express()

//Middlewares
app.use(express.json())
app.use(cors())

// Routes
app.use('/', indexRoutes)
app.use('/api', songsRoutes)
app.use('/auth', authRoutes)

app.use((req, res, next) => {
	badRequest(res)
})

export default app
