/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai"
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi"

const BookModal = ({ book, onClose }) => {
	return (
		<div
			className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
			onClick={onClose}
		>
			<div
				onClick={(event) => event.stopPropagation()}
				className="w-[37.5rem] max-w-full h-[25rem] bg-white rounded-lg p-4 flex flex-col mx-4 relative"
			>
				<AiOutlineClose
					className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
					onClick={onClose}
				/>
				<h2 className="w-fit px-3 py-1 bg-red-100 text-red-700 ring-1 ring-inset ring-red-600/40 rounded-lg">
					{book.publishYear}
				</h2>
				<h4 className="my-2 text-gray-500">{book._id}</h4>
				<div className="flex justify-start books-center gap-x-2">
					<PiBookOpenTextLight className="text-red-300 text-2xl" />
					<h2 className="my-1">{book.title}</h2>
				</div>
				<div className="flex justify-start books-center gap-x-2">
					<BiUserCircle className="text-red-300 text-2xl" />
					<h2 className="my-1">{book.author}</h2>
				</div>
				<p className="mt-4">Show Any Info</p>
				<p className="my-2 text-pretty text-justify">
					Lorem ipsum dolor cacildis sit amet consectetur adipisicing elit.
					Quasi labore cupiditate quisquam dolor praesentium quo culpa rem
					libero ullam autem. Maiores iste beers fuga quas, qui perspiciatis
					amet necessitatibus ipsum.
				</p>
			</div>
		</div>
	)
}
export default BookModal
