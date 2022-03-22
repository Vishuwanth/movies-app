import './navbar.scss'
import logo from './../../asssets/logo.svg'
import avatar from './../../asssets/Avatar.svg'
import { Avatar } from '@material-ui/core'

import { SearchOutlined } from '@material-ui/icons'
import { useEffect, useState } from 'react'

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true)
		return () => (window.onscroll = null)
	}
	useEffect(() => {
		return () => {}
	}, [])

	console.log(isScrolled)
	return (
		<div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
			<div className='container'>
				<div className='left'>
					<img src={logo} alt='Logo' />
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>Popular</span>
					<span>MyList</span>
				</div>
				<div className='right'>
					<SearchOutlined className='icon' />
					<div className='profile-container'>
						<Avatar className='avatar' alt='Remy Sharp' src={avatar} />
						{/* <KeyboardArrowDown className='dropdown-icon' /> */}
						<div className='options'>
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
