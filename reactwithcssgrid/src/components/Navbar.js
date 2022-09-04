import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
	return (
		<div className='nav'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/projects'>Projects</NavLink>
			<NavLink to='/about'>About</NavLink>
		</div>
	)
}

export default Navbar
