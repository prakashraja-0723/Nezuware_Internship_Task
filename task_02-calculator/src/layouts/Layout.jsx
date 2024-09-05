import React from 'react'

const Layout = ({children}) => {
	return (
		<>
		<section className={`container h-screen 2xl:max-w-screen-1080 mx-auto`}>
			{children}
		</section>
		</>
	)
}
export default Layout
