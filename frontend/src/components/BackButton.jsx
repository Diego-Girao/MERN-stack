import { Link } from "react-router-dom"
import { TbCircleArrowLeftFilled } from "react-icons/tb"

// eslint-disable-next-line react/prop-types
const BackButton = ({ destination = "/" }) => {
	return (
		<div className="flex">
			<Link to={destination} className="mx-2 my-2 rounded-lg w-fit">
				<TbCircleArrowLeftFilled className="size-8 text-sky-700 hover:text-black hover:duration-200 hover:ease-linear" />
			</Link>
		</div>
	)
}

export default BackButton
