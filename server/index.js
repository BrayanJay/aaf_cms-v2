import express from 'express'
import cors from 'cors'
import authRouter from './routes/authRoutes.js'
import authUploads from './routes/authUploads.js'

const app = express()

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}))
app.use(express.json())
app.use('/auth', authRouter)
app.use('/data', authUploads)
app.get('/', (req, res) => {
    console.log("req.body")
})

app.listen(3000, () => {
    console.log("Server is Running on port 3000")
})