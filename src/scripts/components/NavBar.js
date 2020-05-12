import React from 'react';

import NavItem from './NavItem.js';

import { ReactComponent as LogoPlaceholder } from '../../assets/logo_placeholder.svg';
import { ReactComponent as KnightIcon } from '../../assets/knight.svg';
import { ReactComponent as DonateIcon } from '../../assets/donate.svg';
import { ReactComponent as AboutIcon } from '../../assets/about.svg';
import { ReactComponent as BrothersIcon } from '../../assets/brothers.svg';
import { ReactComponent as LoginIcon } from '../../assets/login.svg';

function NavBar() {
	return (
		<nav className='navbar'>
			<ul className='navbar-nav'>
				<ul className='container nav-left'>
					<li className='container nav-left-container-left'>
						<NavItem
							linkName='Omega Delta Phi - AA Chapter'
							icon={<LogoPlaceholder />}
						/>
					</li>
					<li className='container nav-left-container-right'>
						<NavItem linkName='About' icon={<AboutIcon />} />
						<NavItem linkName='Brothers' icon={<BrothersIcon />} />
						<NavItem linkName='Become a Knight' icon={<KnightIcon />} />
						<NavItem linkName='Donate' icon={<DonateIcon />} />
					</li>
				</ul>
				<li className='container nav-right'>
					<NavItem linkName='Login' icon={<LoginIcon />} />
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
