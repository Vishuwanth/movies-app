const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

// Register

router.post('/register', async (req, res) => {
	// Encrypt Password
	var ciphertext = CryptoJS.AES.encrypt(
		req.body.password,
		process.env.SECRET_KEY
	).toString()
	// Register a user
	const newUser = await new User({
		username: req.body.username,
		email: req.body.email,
		password: ciphertext,
	})

	try {
		const user = await newUser.save()

		console.log(user)
		res.status(201).json(user)
	} catch (error) {
		res.status(500).json(error)
	}
})

// Login

router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email })
		if (!user) {
			res.status(401).json('Wrong Credentials or Username!')
		} else {
			// Decrypt
			var bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
			var orginalPassword = bytes.toString(CryptoJS.enc.Utf8)
			if (orginalPassword !== req.body.password) {
				res.status(401).json('Wrong Credentials or Username!')
			} else {
				const accessToken = jwt.sign(
					{ id: user._id, isAdmin: user.isAdmin },
					process.env.SECRET_KEY,
					{ expiresIn: '5d' }
				)
				const { password, ...info } = user._doc
				res.status(200).json({ ...info, accessToken })
			}
		}
	} catch (error) {
		res.status(500).json(error)
	}
})

module.exports = router
