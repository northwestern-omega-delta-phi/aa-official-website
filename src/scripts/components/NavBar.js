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
				<div className='container container-left'>
					<NavItem
						linkName='Omega Delta Phi - AA Chapter'
						icon={<LogoPlaceholder />}
					/>
					<NavItem linkName='Become a Knight' icon={<KnightIcon />} />
					<NavItem linkName='Donate' icon={<DonateIcon />} />
				</div>

				<div className='container container-right'>
					<NavItem linkName='About' icon={<AboutIcon />} />
					<NavItem linkName='Brothers' icon={<BrothersIcon />} />
					<NavItem linkName='Login' icon={<LoginIcon />} />
				</div>
			</ul>
		</nav>
	);
}

export default NavBar;
