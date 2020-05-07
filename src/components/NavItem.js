import React from 'react';

function NavItem(props) {
	if (!props.logo) {
		return (
			<li className='nav-item'>
				<a href='#' className={'nav-link'}>
					{props.icon}
					<span className='link-text'>{props.linkName}</span>
				</a>
			</li>
		);
	}
	return (
		<li className='logo nav-item'>
			<a href='#' className={'nav-link'}>
				<span className='link-text'>{props.linkName}</span>
				{props.icon}
			</a>
		</li>
	);
}

export default NavItem;
