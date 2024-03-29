import { useState, useEffect } from "react"
import Skeleton from "../components/Skeleton"
import BackButton from "../components/BackButton"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { useSnackbar } from "notistack"

const EditBook = () => {
	const [title, setTitle] = useState("")
	const [author, setAuthor] = useState("")
	const [publishYear, setPublishYear] = useState("")
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const { enqueueSnackbar } = useSnackbar()
	const { id } = useParams()
	useEffect(() => {
		setLoading(true)
		axios
			.get(`http://localhost:5555/books/${id}`)
			.then((response) => {
				setAuthor(response.data.author)
				setPublishYear(response.data.publishYear)
				setTitle(response.data.title)
				setLoading(false)
			})
			.catch((error) => {
				setLoading(false)
				alert("An error happened. Please Check the console")
				console.log(error)
			})
	}, [id])
	const handleEditBook = () => {
		const data = {
			title,
			author,
			publishYear,
		}
		setLoading(true)
		axios
			.put(`http://localhost:5555/books/${id}`, data)
			.then(() => {
				setLoading(false)
				enqueueSnackbar("Book Edited Successfully!", { variant: "success" })
				navigate("/")
			})
			.catch((error) => {
				setLoading(false)
				enqueueSnackbar("Error", { variant: "error" })
				alert("An error happened. Please Check the console")
				console.log(error)
			})
	}

	return (
		<div className="p-4">
			<BackButton />
			<h1 className="text-3xl my-4">Edit Book</h1>
			{loading ? <Skeleton /> : ""}
			<div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto">
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Title</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="rounded-xl border-2 border-gray-500 px-4 py-2 w-full"
						required
					/>
				</div>
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Author</label>
					<input
						type="text"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
						className="rounded-xl border-2 border-gray-500 px-4 py-2 w-full"
						required
					/>
				</div>
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Publish Year</label>
					<input
						type="number"
						value={publishYear}
						onChange={(e) => setPublishYear(e.target.value)}
						className="rounded-xl border-2 border-gray-500 px-4 py-2 w-full"
						required
					/>
				</div>
				<button
					className="rounded-xl p-2 text-lg font-semibold text-white bg-sky-500 my-4 w-full hover:bg-sky-800"
					onClick={handleEditBook}
				>
					Save
				</button>
			</div>
		</div>
	)
}

export default EditBook
