/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle, BiShow } from "react-icons/bi"
import { VscInfo } from "react-icons/vsc"
import { TbEdit } from "react-icons/tb"
import { VscTrash } from "react-icons/vsc"
import { useState } from "react"
import BookModal from "./BookModal"

const BookSingleCard = ({ book }) => {
	const [showModal, setShowModal] = useState(false)
	return (
		<div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-2 relative hover:shadow-xl">
			<h2 className="absolute top-1 right-2 px-3 py-1 bg-red-100 text-red-700 ring-1 ring-inset ring-red-600/40 rounded-lg">
				{book.publishYear}
			</h2>
			<h4 className="mt-8 text-gray-400 truncate">Book id: {book._id}</h4>
			<div className="flex justify-start items-center gap-x-2">
				<PiBookOpenTextLight className="text-red-400 text-2xl" />
				<h2 className="my-1 truncate">Title: {book.title}</h2>
			</div>
			<div className="flex justify-start items-center gap-x-2">
				<BiUserCircle className="text-red-300 text-2xl" />
				<h2 className="my-1">Author: {book.author}</h2>
			</div>
			<div className="flex justify-between items-center gap-x-2 mt-4 p-4">
				<BiShow
					className="text-3xl text-purple-700 hover:text-black cursor-pointer"
					title=" Modal"
					onClick={() => setShowModal(true)}
				/>
				<Link to={`/books/details/${book._id}`}>
					<VscInfo
						className="text-2xl text-blue-600 hover:text-black"
						title="Info"
					/>
				</Link>
				<Link to={`/books/edit/${book._id}`}>
					<TbEdit
						className="text-2xl text-yellow-400 hover:text-black"
						title="Edit"
					/>
				</Link>
				<Link to={`/books/delete/${book._id}`}>
					<VscTrash
						className="text-2xl text-red-600 hover:text-black"
						title="Delete"
					/>
				</Link>
			</div>
			{showModal && (
				<BookModal book={book} onClose={() => setShowModal(false)} />
			)}
		</div>
	)
}
export default BookSingleCard
