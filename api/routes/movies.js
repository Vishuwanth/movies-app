const router = require('express').Router()
const Movie = require('../models/Movies')

const verify = require('../verifyToken')

// Create Movie
router.post('/', verify, async (req, res) => {
	if (req.user.isAdmin) {
		const newMovie = new Movie(req.body)

		try {
			const savedMovie = await newMovie.save()
			res.status(201).json(savedMovie)
		} catch (error) {
			res.status(500).json(error)
		}
	} else {
		res.status(403).json('you are not allowed ,only admin!')
	}
})

// Update Movie
router.put('/:id', verify, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			const updatedMovie = await Movie.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			)
			res.status(200).json(updatedMovie)
		} catch (error) {
			res.status(500).json(error)
		}
	} else {
		res.status(403).json('Only Admin can update movies')
	}
})

// Delete Movie
router.delete('/:id', verify, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			await Movie.findByIdAndDelete(req.params.id)
			res.status(200).json('Movie has been deleted')
		} catch (error) {
			res.status(500).json(error)
		}
	} else {
		res.status(403).json('Only Admin can Delete movies')
	}
})

// Get Movie
router.get('/find/:id', verify, async (req, res) => {
	try {
		const movie = await Movie.findById(req.params.id)

		res.status(200).json(movie)
	} catch (error) {
		res.status(500).json(error)
	}
})
// Get Random Movie

router.get('/random', verify, async (req, res) => {
	const type = req.query.type
	let movie
	try {
		if (type === 'series') {
			movie = await Movie.aggregate([
				{
					$match: {
						isSeries: true,
					},
				},
				{
					$sample: { size: 1 },
				},
			])
		} else {
			movie = await Movie.aggregate([
				{
					$match: {
						isSeries: false,
					},
				},
				{
					$sample: { size: 1 },
				},
			])
		}

		res.status(200).json(movie)
	} catch (error) {}
})

// Get All Movies

router.get('/', verify, async (req, res) => {
	// const query = req.query.new

	if (req.user.isAdmin) {
		try {
			// const movies = query
			// 	? await Movie.find().sort({ _id: -1 })
			// 	: await Movie.find()
			const movies = await Movie.find()

			res.status(200).json(movies.reverse())
		} catch (error) {
			res.status(500).json(error)
		}
	} else {
		res.status(403).json('you are not allowed to see all Movies')
	}
})

// Get user stats

router.get('/stats', async (req, res) => {
	const today = new Date()
	const lastYear = today.setFullYear(today.setFullYear() - 1)

	const monthsArray = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	try {
		const data = await User.aggregate([
			{
				$project: {
					month: { $month: '$createdAt' },
				},
			},
			{
				$group: {
					_id: '$month',
					total: { $sum: 1 },
				},
			},
		])

		res.status(200).json(data)
	} catch (error) {
		res.status(500).json(error)
	}
})

module.exports = router
