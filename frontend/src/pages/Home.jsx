import { useEffect, useState } from "react"
import axios from "axios"
import Skeleton from "../components/Skeleton"
import { Link } from "react-router-dom"
import { FcPlus, FcInfo } from "react-icons/fc"
import { VscTrash } from "react-icons/vsc"
import { TbEdit } from "react-icons/tb"

const Home = () => {
	const [books, setBooks] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
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
		}, 3000)
	}, [])

	return (
		<div className="p-4">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl my-8">Books List</h1>
				<Link to="/books/create">
					<FcPlus className="size-8" />
				</Link>
			</div>
			{loading ? (
				<Skeleton />
			) : (
				<table className="w-full border-separate border-spacing-2">
					<thead>
						<tr>
							<th className="border border-slate-600 rounded-md">No</th>
							<th className="border border-slate-600 rounded-md">Title</th>
							<th className="border border-slate-600 rounded-md max-md:hidden">
								Author
							</th>
							<th className="border border-slate-600 rounded-md max-md:hidden">
								Publish Year
							</th>
							<th className="border border-slate-600 rounded-md">Operations</th>
						</tr>
					</thead>
					<tbody>
						{books.map((book, index) => (
							<tr key={book._id} className="h-8">
								<td className="border border-slate-700 rounded-md text-center">
									{index + 1}
								</td>
								<td className="border border-slate-700 rounded-md text-center">
									{book.title}
								</td>
								<td className="border border-slate-700 rounded-md text-center max-md:hidden">
									{book.author}
								</td>
								<td className="border border-slate-700 rounded-md text-center max-md:hidden">
									{book.publishYear}
								</td>
								<td className="border border-slate-700 rounded-md text-center">
									<div className="flex justify-center gap-x-4">
										<Link to={`/books/details/${book._id}`}>
											<FcInfo className="text-2xl text-emerald-600" />
										</Link>
										<Link to={`/books/edit/${book._id}`}>
											<TbEdit className="text-2xl text-yellow-400" />
										</Link>
										<Link to={`/books/delete/${book._id}`}>
											<VscTrash className="text-2xl text-red-600" />
										</Link>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default Home
