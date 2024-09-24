import React from 'react'
import Link from "next/link";
import HighlightText1 from '@/components/ui/HighlightText1';
import HighlightText2 from '@/components/ui/HighlightText2';
import HighlightText3 from '@/components/ui/HighlightText3';

const Logo = () => {
	return (
		<>
			<div className="navbar-center lg:navbar-start lg:w-fit h-fit lg:bg-white px-4 py-1 lg:border-l-8 border-pink-400 lg:shadow">
				<Link href={'/'}><HighlightText3 textStyles={'text-4xl' +
					' pr-0'}>BootiQ</HighlightText3></Link>
			</div>
		</>
	)
}
export default Logo
