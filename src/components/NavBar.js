import React from 'react';

import NavItem from './NavItem.js';

import { ReactComponent as LogoPlaceholder } from '../assets/logo_placeholder.svg';
import { ReactComponent as KnightIcon } from '../assets/knight.svg';
import { ReactComponent as DonateIcon } from '../assets/donate.svg';
import { ReactComponent as HomeIcon } from '../assets/home.svg';
import { ReactComponent as AboutIcon } from '../assets/about.svg';
import { ReactComponent as BrothersIcon } from '../assets/brothers.svg';
import { ReactComponent as LoginIcon } from '../assets/login.svg';

function NavBar() {
	return (
		<nav className='navbar'>
			<ul className='navbar-nav'>
				<NavItem linkName='ODPhi - AA Chapter' icon={<LogoPlaceholder />} />

				<NavItem linkName='Become a Knight' icon={<KnightIcon />} />
				<NavItem linkName='Donate' icon={<DonateIcon />} />
				<NavItem linkName='About' icon={<AboutIcon />} />
				<NavItem linkName='Brothers' icon={<BrothersIcon />} />
				<NavItem linkName='Login' icon={<LoginIcon />} />
			</ul>
		</nav>
	);
}

export default NavBar;
