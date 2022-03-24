import React from 'react';
import Logo from '../../images/logo.svg';
import Button from '../button';
import './style.css';

const Header = () => {
	return (
		<header className='header'>
			<img src={Logo} alt='logo' className='logo' />
			<nav>
				<ul className='header__navlinks'>
					<li className='navlink'>Features</li>
					<li className='navlink'>Pricing</li>
					<li className='navlink'>Resources</li>
					<li className='navlink login'>Login</li>
					<li className='navlink'>
						<Button label='Sign Up' />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
