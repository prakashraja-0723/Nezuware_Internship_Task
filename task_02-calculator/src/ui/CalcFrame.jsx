import React from 'react'
import CalcTitle from "./CalcTitle.jsx";

const CalcFrame = ({children}) => {
	return (
		<>
			<div className={`lg:w-fit lg:h-fit scale-50 md:scale-100`}>
				<CalcTitle />
				<div
					className={`bg-primary w-full h-fit rounded-3xl flex items-center justify-center shadow-inner shadow-secondary p-8`}
				>
					<div
						className={`bg-secondary w-full h-fit rounded-xl px-8 py-8  shadow-inner shadow-secondary-content`}
					>{children}</div>
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
