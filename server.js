import express from "express";
import mongoose from "mongoose";
import Cards from './models/dbCards.js'
import cors from 'cors'

//App config

const app = express()

const port = process.env.port || 8001

const connection_url = 'mongodb://localhost:27017/tinderdb'
//Middlewares
app.use(express.json())
app.use(cors())

// DB config
mongoose.connect(connection_url)


//Api endpoints
app.get('/', (req, res) => {
    res.status(200).send("tinclone ")

})

app.post('/api/tinder/addcard', async (req, res) => {
    const card = await Cards.create(req.body)

    res.send(card)

})

app.get('/api/tinder/getallcards', async (req, res) => {
    const allcards = await Cards.find()

    res.send(allcards)
})

//Listeners
app.listen(port, () => { console.log(`server started on http://localhost:${port}`); })
