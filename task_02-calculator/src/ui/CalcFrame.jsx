import React from 'react'
import CalcTitle from "./CalcTitle.jsx";
import {FaGithub} from "react-icons/fa6";

const CalcFrame = ({children}) => {
	return (
		<>
			<div className={`lg:w-fit lg:h-fit w-11/12 md:w-10/12 lg:scale-75 xl:scale-90 2xl:scale-100 `}>
				<CalcTitle />
				<div
					className={`bg-slate-800 w-full h-fit rounded-xl md:rounded-3xl flex items-center justify-center p-4 md:p-8` }
				>
					<div
						className={`bg-slate-900 w-full h-fit rounded-xl p-3 md:p-8 lg:flex lg:gap-16 `}
					>{children}</div>
				</div>
			</div>
		</>
	)
}
export default CalcFrame
