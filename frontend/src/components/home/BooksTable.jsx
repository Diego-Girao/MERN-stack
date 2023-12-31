/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { FcInfo } from "react-icons/fc"
import { VscTrash } from "react-icons/vsc"
import { TbEdit } from "react-icons/tb"

const BooksTable = ({ books }) => {
	return (
		<table className="w-full border-separate border-spacing-2">
			<thead>
				<tr>
					<th className="border border-slate-600 bg-black text-white rounded-md">
						No
					</th>
					<th className="border border-slate-600 bg-black text-white rounded-md">
						Title
					</th>
					<th className="border border-slate-600 bg-black text-white rounded-md max-md:hidden">
						Author
					</th>
					<th className="border border-slate-600 bg-black text-white rounded-md max-md:hidden">
						Publish Year
					</th>
					<th className="border border-slate-600 bg-black text-white rounded-md">
						Operations
					</th>
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
									<FcInfo className="text-2xl" title="Info" />
								</Link>
								<Link to={`/books/edit/${book._id}`}>
									<TbEdit className="text-2xl text-yellow-400" title="Edit" />
								</Link>
								<Link to={`/books/delete/${book._id}`}>
									<VscTrash className="text-2xl text-red-600" title="Delete" />
								</Link>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default BooksTable
