const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userAuth = require('./routes/users')
const movieRoute = require('./routes/movies')
const listRoute = require('./routes/lists')

dotenv.config()

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('DB Connected Succesfully'))
	.catch((err) => console.log(err))
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userAuth)
app.use('/api/movies', movieRoute)
app.use('/api/lists', listRoute)

app.listen(8080, () => {
	console.log('server running on port 8080')
})
