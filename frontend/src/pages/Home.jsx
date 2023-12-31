import { useEffect, useState } from "react"
import axios from "axios"
import Skeleton from "../components/Skeleton"
import { Link } from "react-router-dom"
import { FcPlus } from "react-icons/fc"
import BooksTable from "../components/home/BooksTable"
import BooksCard from "../components/home/BooksCard"

const Home = () => {
	const [books, setBooks] = useState([])
	const [loading, setLoading] = useState(false)
	const [showType, setShowType] = useState("table")

	useEffect(() => {
		setLoading(true)
		axios
			.get("http://localhost:5555/books")
			.then((response) => {
				setBooks(response.data.data)
				setLoading(false)
			})
			.catch((error) => {
				console.log(error)
				setLoading(false)
			})
	}, [])

	return (
		<div className="p-4 max-w-[90rem] mx-auto">
			<div className="flex justify-center items-center gap-x-4">
				<button
					className={`px-4 py-1 rounded-lg ${
						showType === "table"
							? "bg-sky-500 shadow-md shadow-black pointer-events-none"
							: "bg-sky-500"
					} hover:bg-black hover:text-white hover:duration-300 hover:ease-linear`}
					onClick={() => setShowType("table")}
				>
					Table
				</button>
				<button
					className={`px-4 py-1 rounded-lg ${
						showType === "card"
							? "bg-sky-500 shadow-md shadow-black pointer-events-none"
							: "bg-sky-500"
					} hover:bg-black hover:text-white hover:duration-300 hover:ease-linear`}
					onClick={() => setShowType("card")}
				>
					Card
				</button>
			</div>
			<div className="flex mx-2 justify-between items-center">
				<h1 className="text-3xl my-6">Books List</h1>
				<Link to="/books/create">
					<FcPlus className="size-8" />
				</Link>
			</div>
			{loading ? (
				<Skeleton />
			) : showType === "table" ? (
				<BooksTable books={books} />
			) : (
				<BooksCard books={books} />
			)}
		</div>
	)
}

export default Home
