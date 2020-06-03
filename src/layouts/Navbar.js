import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
	const path = useLocation().pathname

	return (
		<nav className='navbar'>
			<ul className='navbar__menu'>
				<li data-active={path === '/'}>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li data-active={path === '/lets-make'}>
					<NavLink to='/lets-make'>Let's Make</NavLink>
				</li>
				<div className='underline' />
			</ul>
			
			<div className='hamburger'>
				<span />
				<span />
			</div>
		</nav>
	)
}

export default Navbar
