import { Link } from "react-router-dom"
import { TbSquareRoundedArrowLeftFilled } from "react-icons/tb"

// eslint-disable-next-line react/prop-types
const BackButton = ({ destination = "/" }) => {
	return (
		<div className="flex">
			<Link to={destination} className="mx-2 my-2 rounded-lg w-fit">
				<TbSquareRoundedArrowLeftFilled className="size-8 text-sky-500 hover:text-black hover:duration-200 hover:ease-linear" />
			</Link>
		</div>
	)
}

export default BackButton
