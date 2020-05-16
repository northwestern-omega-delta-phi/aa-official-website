import React from 'react';

import NavItem from './NavItem.js';

import Logo from '../../assets/logo';
import { ReactComponent as KnightIcon } from '../../assets/knight.svg';
import { ReactComponent as DonateIcon } from '../../assets/donate.svg';
import { ReactComponent as AboutIcon } from '../../assets/about.svg';
import { ReactComponent as BrothersIcon } from '../../assets/brothers.svg';
import { ReactComponent as LoginIcon } from '../../assets/login.svg';

function NavBar() {
	return (
		<nav className='navbar'>
			<ul className='navbar__list'>
				<ul className='navbar__section navbar__section--left'>
					<li className='navbar__sub-section navbar__sub-section--left'>
						<NavItem
							linkName='Omega Delta Phi - AA Chapter'
							itemModifier=' navbar__nav-item--logo'
							linkTextModifier=' navbar__link-text--logo'
							icon={
								<Logo className='navbar__link-icon navbar__link-icon--logo' />
							}
						/>
					</li>
					<li className='navbar__sub-section navbar__sub-section--right'>
						<NavItem
							linkName='About'
							icon={<AboutIcon className='navbar__link-icon' />}
						/>
						<NavItem
							linkName='Brothers'
							icon={<BrothersIcon className='navbar__link-icon' />}
						/>
						<NavItem
							linkName='Become a Knight'
							icon={<KnightIcon className='navbar__link-icon' />}
						/>
						<NavItem
							linkName='Donate'
							icon={<DonateIcon className='navbar__link-icon' />}
						/>
					</li>
				</ul>
				<li className='navbar__section navbar__section--right'>
					<NavItem
						linkName='Login'
						linkTextModifier=' navbar__link-text--login'
						icon={
							<LoginIcon className='navbar__link-icon navbar__link-icon--login' />
						}
					/>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
