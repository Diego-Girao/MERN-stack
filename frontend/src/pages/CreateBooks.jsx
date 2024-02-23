import { useState } from "react"
import Skeleton from "../components/Skeleton"
import BackButton from "../components/BackButton"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useSnackbar } from "notistack"

const CreateBooks = () => {
	const [title, setTitle] = useState("")
	const [author, setAuthor] = useState("")
	const [publishYear, setPublishYear] = useState("")
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const { enqueueSnackbar } = useSnackbar()
	const handleSaveBook = () => {
		const data = {
			title,
			author,
			publishYear,
		}
		setLoading(true)
		axios
			.post("http://localhost:5555/books", data)
			.then(() => {
				setLoading(false)
				enqueueSnackbar("Book Created Successfully!", { variant: "success" })
				navigate("/")
			})
			.catch((error) => {
				setLoading(false)
				enqueueSnackbar("Error", { variant: "error" })
				// alert("An error happened. Please Check the console")
				console.log(error)
			})
	}

	return (
		<div className="p-4">
			<BackButton />
			<h1 className="text-3xl my-4">Create Book</h1>
			{loading ? <Skeleton /> : ""}
			<div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit sm:w-[37.5rem] p-4 mx-auto">
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
					className="rounded-xl p-2 my-4 text-lg font-semibold text-white bg-sky-500 w-full hover:bg-sky-800"
					onClick={handleSaveBook}
				>
					Save
				</button>
			</div>
		</div>
	)
}

export default CreateBooks
