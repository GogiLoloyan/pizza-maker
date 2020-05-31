import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='home__header'>
			<h1>
				Let's Make
				<br />
				an Amazing Pizza
			</h1>

			<p>It's a awesome Pizza maker for you and your family</p>

			<Link to='/lets-make' className='btn-start' role='button'>
				Start
			</Link>
		</header>
	)
}

export default Header
