import express from "express"
import { PORT } from "./config.js"

const app = express()

// app.get("/", (req, res) => {
// 	console.log(req)
// 	return res.status(123).send("Welcome to my first MERN Stack project!")
// })

app.get("/", (req, res) => {
	res.send("Welcome to my first MERN Stack project!!")
})

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT} 🚀️`)
})
