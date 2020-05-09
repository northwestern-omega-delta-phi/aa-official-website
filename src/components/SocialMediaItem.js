import React from 'react';

function ImageLink({ classname, destination, icon }) {
	return (
		<li className={`social-media-item social-media-item-${classname}`}>
			<a
				href={destination}
				className={`social-media-link social-media-link-${classname}`}>
				{icon}
			</a>
		</li>
	);
}

export default ImageLink;
