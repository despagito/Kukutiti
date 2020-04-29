require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


// Connect to dababase
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
// once open, it's connected.
db.once('open', () => console.log('Connected to Database'))

// recognize the incoming Request Object as a JSON Object.
app.use(express.json())


// Router
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)


// Start Server
app.listen(3001, () => {
  console.log('🔥 App is running.')
})




