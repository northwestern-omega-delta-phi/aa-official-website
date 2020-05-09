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

/**
 * Determines which type of contact info is passed in and formats said contact info
 * into anchor tags, if possible, or into a desired format.
 * @param {string} contactType - The type of contact info being passed in (phone, street, email).
 * @param {string} contactInfo - The contact info being passed in.
 */
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

/**
 * Removes all non-numeric characters from a phone number
 * @param {string} phoneNumber - The phone number to be formatted.
 */

function phoneToNumbersOnly(phoneNumber) {
	return phoneNumber.replace(/\D/g, '');
}

/**
 * Formats street addresses into two lines (address and city-state-zip)
 * @param {string} streetAddress - The street address to be formatted.
 */

function streetAddressInTwoLines(streetAddress) {
	const [streetAddress1, streetAddress2] = streetAddress.split('.');
	return (
		<div>
			<p>{streetAddress1}</p>
			<p>{streetAddress2}</p>
		</div>
	);
}
