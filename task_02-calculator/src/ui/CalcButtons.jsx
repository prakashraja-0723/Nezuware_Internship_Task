import React from 'react'
import {MdOutlineArrowBack} from "react-icons/md";
import {CgClose} from "react-icons/cg";
import {FaBackspace} from "react-icons/fa";

const CalcButtons = ({handleClick,clear,calculate}) => {
	const btn_styles = `grid place-items-center bg-slate-700 text-3xl btn-primary rounded-full aspect-square w-20`;
	return (
		<div className={` pt-10 lg:p-0 grid grid-cols-4 gap-4`}>
			<button className={`${btn_styles} bg-blue-500`} onClick={clear}>C</button>
			<button className={`${btn_styles} bg-red-500`} onClick={()=>handleClick('BackSpace')}><FaBackspace /></button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('/')}>/</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('*')}><CgClose /></button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('9')}>9</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('8')}>8</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('7')}>7</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('-')}>-</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('6')}>6</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('5')}>5</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('4')}>4</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('+')}>+</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('3')}>3</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('2')}>2</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('1')}>1</button>
			<button className={`${btn_styles} row-span-2 h-full rounded-3xl`} onClick={calculate}>=</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('0')}>0</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('00')}>00</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('.')}>.</button>
		</div>
	)
}
export default CalcButtons
