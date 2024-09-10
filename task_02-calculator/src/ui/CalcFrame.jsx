import React from 'react'
import CalcTitle from "./CalcTitle.jsx";
import {FaGithub} from "react-icons/fa6";

const CalcFrame = ({children}) => {
	return (
		<>
			<div className={`lg:w-fit lg:h-fit scale-50 md:scale-100 `}>
				<CalcTitle />
				<div
					className={`bg-slate-800 w-full h-fit rounded-3xl flex items-center justify-center p-8` }
				>
					<div
						className={`bg-slate-900 w-full h-fit rounded-xl px-8 py-8 lg:flex lg:gap-16 `}
					>{children}</div>
				</div>
				{/*  GitHub Link */}
				<div className="flex items-center justify-center gap-3 mt-8 text-xl">
					<span>View code on</span>
					<a
						href="https://github.com/prakashraja-0723/Nezuware_Internship_Task/tree/main/task_02-calculator"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-1 text-primary-content"
					>
						<FaGithub/>
						<span>@prakashraja-0723</span>
					</a>
				</div>
			</div>
			{/*<div className={`bg-gray-900`}>*/}
			{/*	<div>*/}
			{/*	*/}
			{/*	</div>*/}
			{/*</div>*/}
		</>
	)
}
export default CalcFrame
