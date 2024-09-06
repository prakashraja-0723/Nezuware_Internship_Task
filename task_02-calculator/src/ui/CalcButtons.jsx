import React from 'react'
import {MdOutlineArrowBack} from "react-icons/md";

const CalcButtons = ({handleClick,clear,calculate}) => {
	const btn_styles = `btn text-3xl btn-primary rounded-xl px-6 min-h-16 shadow-inner shadow-accent`;
	return (
		<div className={` pt-10 grid grid-cols-3 gap-4`}>
			<button className={`${btn_styles} btn-accent shadow-primary`} onClick={clear}>C</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('/')}>/</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('*')}>*</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('-')}>-</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('+')}>+</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('9')}>9</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('8')}>8</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('7')}>7</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('6')}>6</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('5')}>5</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('4')}>4</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('3')}>3</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('2')}>2</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('1')}>1</button>
			<button className={`${btn_styles} row-span-2 h-full`} onClick={calculate}>=</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('0')}>0</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('.')}>.</button>
		</div>
	)
}
export default CalcButtons
