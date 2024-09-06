import React from 'react'
import {FaRegClock} from "react-icons/fa6";

const CalcHistoryBtn = () => {
	return (
		<>
			<input id="my-drawer" type="checkbox" className="drawer-toggle"/>
			<div className="drawer-content">
				<label
					htmlFor="my-drawer"
					className="btn btn-primary drawer-button rounded-md"
				>
					<FaRegClock/>
					&nbsp;History
				</label>
			</div>
		</>
	)
}
export default CalcHistoryBtn
