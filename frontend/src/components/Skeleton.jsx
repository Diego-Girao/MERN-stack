import { GiBookshelf } from "react-icons/gi"

function Skeleton() {
	return (
		<div className="absolute inset-0 flex justify-center items-center">
			<div className="w-full h-fit flex justify-center gap-8 items-center select-none opacity-55">
				<div
					className="flex text-sky-400 animate-pulse"
					style={{ animationDelay: "0s" }}
				>
					<GiBookshelf className="size-10" />
				</div>
				<div
					className="flex text-sky-700 animate-pulse"
					style={{ animationDelay: "0.4s" }}
				>
					<GiBookshelf className="size-10" />
				</div>
				<div
					className="flex text-sky-900 animate-pulse"
					style={{ animationDelay: "0.6s" }}
				>
					<GiBookshelf className="size-10" />
				</div>
			</div>
		</div>
	)
}

export default Skeleton
