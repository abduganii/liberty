const express = require('express')
const app = express()
const cors = require('cors')
const { PORT } = require('./config') 
const router = require('./moduls')

app.use(express.json())

app.use(cors())
app.use(router)

app.listen(PORT, console.log(PORT))