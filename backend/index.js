import express from "express"
import mongoose from "mongoose"
import { PORT, mongodbURL } from "./config.js"
import booksRoute from "./routes/booksRoute.js"

const app = express()

// Middleware for parsing request body
app.use(express.json())

app.use("/books", booksRoute)

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
