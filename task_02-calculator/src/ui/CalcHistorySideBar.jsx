import React from 'react'
import {IoCloseOutline} from "react-icons/io5";

const CalcHistorySideBar = () => {
	return (
		<>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-16 flex flex-col gap-4">
					<label
						htmlFor="my-drawer"
						aria-label="close sidebar"
						className="drawer-overlay text-2xl absolute top-4 right-8 btn hover:bg-transparent rounded-full aspect-square p-0 text-primary-content "
					>
						<IoCloseOutline/>
					</label>
					<li>
						<a>2*2=4</a>
					</li>
					<li>
						<a>2*2=4</a>
					</li>
					<li>
						<a>2*2=4</a>
					</li>
					<li>
						<a>2*2=4</a>
					</li>
					<li>
						<a>2*2=4</a>
					</li>
					<li>
						<a>2*2=4</a>
					</li>
				</ul>
			</div>
		</>
	)
}
export default CalcHistorySideBar
