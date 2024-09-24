import React from 'react'
import {FaBackspace, FaTimes} from "react-icons/fa";
import {FaDivide, FaEquals, FaMinus, FaPercent, FaPlus} from "react-icons/fa6";

const CalcButtons = ({handleClick,clear,calculate}) => {
	const btn_styles = `grid place-items-center bg-slate-700 text-3xl btn-primary rounded-full aspect-square min-w-14 md:w-24 lg:w-20 font-semibold`;
	return (
		<div className={` pt-10 lg:p-0 grid grid-cols-4 gap-4`}>
			<button className={`bg-blue-500 grid place-items-center text-3xl btn-primary rounded-full aspect-square min-w-14 md:w-24 lg:w-20 font-semibold `} onClick={clear}>AC</button>
			<button className={`bg-red-500 grid place-items-center text-3xl btn-primary rounded-full aspect-square min-w-14 md:w-24 lg:w-20 font-semibold `} onClick={()=>handleClick('BackSpace')}><FaBackspace /></button>
			{/*<button className={`${btn_styles}`} onClick={()=>handleClick('%')}><FaPercent /></button>*/}
			<button className={`${btn_styles}`} onClick={()=>handleClick('/')}><FaDivide/></button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('*')}><FaTimes /></button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('9')}>9</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('8')}>8</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('7')}>7</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('-')}><FaMinus /></button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('6')}>6</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('5')}>5</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('4')}>4</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('+')}><FaPlus /></button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('3')}>3</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('2')}>2</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('1')}>1</button>
			<button className={`bg-orange-400 text-base-100 grid place-items-center text-3xl btn-primary rounded-xl w-full md:w-24 lg:w-20 font-semibold row-span-2`} onClick={calculate}><FaEquals /></button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('00')}>00</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('0')}>0</button>
			<button className={`${btn_styles}`} onClick={()=>handleClick('.')}>.</button>
		</div>
	)
}
export default CalcButtons
