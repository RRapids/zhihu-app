//模拟数据
const express = require('express')
const app = express()
//推荐
var recommendList = require('./src/data/recommend.json')
//关注
var followList = require('./src/data/follows.json')
//热榜各页面
var totalList = require('./src/data/total.json')
var scienceList = require('./src/data/science.json')
var sportList = require('./src/data/sport.json')
var filmList = require('./src/data/film.json')
var fashionList = require('./src/data/fashion.json')
var digitalList = require('./src/data/digital.json')

//API路径
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

module.exports = {
	devServer: {
		host: "localhost",
		port: 8888,
		https: false,
		open: true,
		hotOnly: true,
		before(app) {
			app.get('/api/recommend', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: recommendList
				})
			})
			app.get('/api/follow', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: followList
				})
			})
			app.get('/api/hot-lists/total', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: totalList
				})
			})
			app.get('/api/hot-lists/digital', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: digitalList
				})
			})
			app.get('/api/hot-lists/film', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: filmList
				})
			})
			app.get('/api/hot-lists/science', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: scienceList
				})
			})
			app.get('/api/hot-lists/sport', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: sportList
				})
			})
			app.get('/api/hot-lists/fashion', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: fashionList
				})
			})
		}
	}
};
