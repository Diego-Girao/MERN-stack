import express from "express"
import mongoose from "mongoose"
import { PORT, mongodbURL } from "./config.js"
import booksRoute from "./routes/booksRoute.js"
import cors from "cors"

const app = express()

// Middleware for parsing request body
app.use(express.json())

// Middleware for handling CORS POLICY - Allow Custom Origins
app.use(cors())

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
