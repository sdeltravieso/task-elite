const express = require('express')
const db = require('../models')
const passport = require('../config/localStrategy')

module.exports = function (app) {
	// this route is just used to get the user basic info
	app.get('/auth/user', (req, res, next) => {
		console.log('===== user!!======')
		console.log(req.user)
		if (req.user) {
			return res.json({
				user: req.user
			})
		} else {
			return res.json({
				user: null
			})
		}
	})

	//////////////////////////////////

	app.post('/auth/login',
		function (req, res, next) {
			console.log(req.body)
			console.log('================')
			next()
		},
		passport.authenticate('local'),
		(req, res) => {
			console.log('req', req.user)
			console.log('POST to /login')
			const user = JSON.parse(JSON.stringify(req.user))
			console.log(req.password);
			const cleanUser = Object.assign({}, user)
			if (cleanUser.local) {
				console.log(`Deleting ${cleanUser.local.password}`)
				delete cleanUser.local.password
			}
			res.json({
				user: cleanUser
			})
		}
	)

	//////////////////////////////////

	app.post('/auth/logout', (req, res) => {
		if (req.user) {
			req.session.destroy()
			res.clearCookie('connect.sid') // clean up!
			return res.json({
				msg: 'logging you out'
			})
		} else {
			return res.json({
				msg: 'no user to log out!'
			})
		}
	})

	//////////////////////////////////

	app.post('/auth/signup', (req, res) => {
		const {
			fullName,
			username,
			password
		} = req.body;
		// ADD VALIDATION
		db.User.findOne({
			where: {
				username: username
			}
		}).then(user => {
			if (user) {
				console.log('User already exists! ', user)
				res.json({
					error: user
				})
			} else {
				console.log('User does not exist', user)
				db.User.build({
						fullname: fullName,
						username: username,
						password: password
					}).save().then(createdUsername => {
						console.log('we have created the username', createdUsername)
						res.json({
							username: createdUsername
						})
					})
					.catch(error => {
						console.log('error', error)
					})
			}
		})
	})

	//////////////////////////////////

}