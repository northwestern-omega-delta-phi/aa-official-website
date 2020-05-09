import React from 'react';

function ImageLink({ classname, icon, contactType, contactInfo }) {
	return (
		<li className={`contact contact-${classname}`}>
			<div className='svg-holder'>{icon}</div>
			<address>{contactInfoLink(contactType, contactInfo)}</address>
		</li>
	);
}

export default ImageLink;

function contactInfoLink(contactType, contactInfo) {
	switch (contactType) {
		case 'phone':
			return (
				<a href={`tel:+1${phoneToNumbersOnly(contactInfo)}`}>{contactInfo}</a>
			);
		case 'email':
			return <a href={`mailto:${contactInfo}`}>{contactInfo}</a>;
		default:
			return streetAddressInTwoLines(contactInfo);
	}
}

function phoneToNumbersOnly(phoneNumber) {
	return phoneNumber.replace(/\D/g, '');
}

function streetAddressInTwoLines(streetAddress) {
	const [streetAddress1, streetAddress2] = streetAddress.split('.');
	return (
		<div>
			<p>{streetAddress1}</p>
			<p>{streetAddress2}</p>
		</div>
	);
}
