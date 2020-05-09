import React from 'react';

function NavItem(props) {
	return (
		<li className='nav-item'>
			<a href='#' className={'nav-link'}>
				{props.icon}
				<span className='link-text'>{props.linkName}</span>
			</a>
		</li>
	);
}

export default NavItem;
