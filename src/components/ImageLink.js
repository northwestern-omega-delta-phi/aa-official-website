import React from 'react';

function ImageLink(props) {
	return (
		<a className={props.class} href={props.link}>
			<img src={props.src} alt={props.alt} />
		</a>
	);
}

export default ImageLink;
