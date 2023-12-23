import express from "express"
import mongoose from "mongoose"
import { PORT, mongodbURL } from "./config.js"
import { Book } from "./models/bookModel.js"

const app = express()

// Middleware for parsing request body
app.use(express.json())

// Route for Save/Create a new Book

app.post("/books", async (request, response) => {
	try {
		if (
			!request.body.title ||
			!request.body.author ||
			!request.body.publishYear
		) {
			return response.status(400).send({
				message: "Send all required fields:, title, author and publishYear",
			})
		}
		const newBook = {
			title: request.body.title,
			author: request.body.author,
			publishYear: request.body.publishYear,
		}

		const book = await Book.create(newBook)

		return response.status(201).send(book)
	} catch (error) {
		console.log(error.message)
		response.status(500).send({ message: error.message })
	}
})

// Route for Get All books from database
app.get("/books", async (request, response) => {
	try {
		const books = await Book.find({})
		return response.status(200).json({
			count: books.length,
			data: books,
		})
	} catch (error) {
		console.log(error.message)
		response.status(500).send({ message: error.message })
	}
})
// Route for Get One book from database by id
app.get("/books/:id", async (request, response) => {
	try {
		const { id } = request.params
		const books = await Book.findById(id)
		return response.status(200).json({
			count: books.length,
			data: books,
		})
	} catch (error) {
		console.log(error.message)
		response.status(500).send({ message: error.message })
	}
})

// Route for Update a Book
app.put("/books/:id", async (request, response) => {
	try {
		if (
			!request.body.title ||
			!request.body.author ||
			!request.body.publishYear
		) {
			return response.status(400).send({
				message: "Send all required fields:, title, author and publishYear",
			})
		}

		const { id } = request.params

		const result = await Book.findByIdAndUpdate(id, request.body)

		if (!result) {
			return response.status(404).json({ message: "Book not found" })
		}

		return response.status(200).send({ message: "Book updated successfully" })
	} catch (error) {
		console.log(error.message)
		response.status(500).send({ message: error.message })
	}
})

// Route for Delete a Book
app.delete("/books/:id", async (request, response) => {
	try {
		const { id } = request.params

		const result = await Book.findByIdAndDelete(id)

		if (!result) {
			return response.status(404).json({ message: "Book not found" })
		}

		return response.status(200).send({ message: "Book deleted successfully" })
	} catch (error) {
		console.log(error.message)
		response.status(500).send({ message: error.message })
	}
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
