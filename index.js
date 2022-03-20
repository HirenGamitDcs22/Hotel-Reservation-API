const express = require('express')
require("dotenv").config()
const mongoose=require('mongoose')

const app = express()
app.use(express.json())
const port = process.env.PORT || 3001
mongoose.connect(process.env.MONGODB_URL)
    .then(() =>console.log("MongoDB Connected Successfully!"))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server Running on port ${port}!`))