import React from 'react';

function NavItem(props) {
	return (
		<li className={`navbar__nav-item ${props.itemModifier || ''}`}>
			<a href='#' className='navbar__nav-link'>
				{props.icon}
				<span className={`navbar__link-text${props.linkTextModifier || ''}`}>
					{props.linkName}
				</span>
			</a>
		</li>
	);
}

export default NavItem;
