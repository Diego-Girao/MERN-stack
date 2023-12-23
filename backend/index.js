import express from "express"
import { PORT, mongodbURL } from "./config.js"
import mongoose from "mongoose"

const app = express()

// app.get("/", (req, res) => {
// 	console.log(req)
// 	return res.status(123).send("Welcome to my first MERN Stack project!")
// })

app.get("/", (req, res) => {
	console.log(req)
	return res.status(245).send("My first MERN Stack project !!")
})

mongoose
	.connect(mongodbURL)
	.then(() => {
		console.log("App connected to database!")
		app.listen(PORT, () => {
			console.log(`App is running on port ${PORT} 🚀️`)
		})
	})
	.catch((error) => {
		console.log(error)
	})
