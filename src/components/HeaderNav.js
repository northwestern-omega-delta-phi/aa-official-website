import React from 'react';

import NavItem from './NavItem';

import { ReactComponent as KnightIcon } from '../assets/knight.svg';
import { ReactComponent as DonateIcon } from '../assets/donate.svg';

function Header() {
	return (
		<nav className='header-navbar'>
			<NavItem linkName='Become a Brother' icon={<KnightIcon />} />
			<NavItem linkName='Donate' icon={<DonateIcon />} />
		</nav>
	);
}

export default Header;
