import React from 'react';

function SocialMediaItem(props) {
	return (
		<li className={`footer__social-media-list-item`}>
			<a href={props.destination} className={`footer__link`}>
				{props.icon}
			</a>
		</li>
	);
}

export default SocialMediaItem;
