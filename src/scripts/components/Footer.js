import React from 'react';
import ContactItem from './ContactItem';
import SocialMediaItem from './SocialMediaItem';

import { ReactComponent as StreetIcon } from '../../assets/location.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg';
import { ReactComponent as EmailIcon } from '../../assets/email.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';

function Footer() {
	return (
		<footer className='main-footer'>
			<section className='footer-section footer-section-left'>
				<h3 className='footer-heading small-media-size'>
					Omega Delta Phi - Alpha Alpha Chapter
				</h3>
				<h3 className='footer-heading'>Omega Delta Phi's Purpose</h3>
				<p className='purpose'>
					The purpose of this Brotherhood, a Service/Social fraternity dedicated
					to the needs and concerns of the community, shall be to promote and
					maintain the traditional values of Unity, Honesty, Integrity, and
					Leadership.
				</p>
				<ul className='social-media-links'>
					<SocialMediaItem
						classname='facebook'
						destination='https://www.facebook.com/nuodphi/'
						icon={<FacebookIcon />}
					/>
					<SocialMediaItem
						classname='instagram'
						destination='https://www.instagram.com/nu.odphi/?hl=en'
						icon={<InstagramIcon />}
					/>
					<SocialMediaItem
						classname='twitter'
						destination='https://twitter.com/nu_odphi?lang=en'
						icon={<TwitterIcon />}
					/>
					<SocialMediaItem
						classname='youtube'
						destination='https://www.youtube.com/channel/UCphGKda9od2hJabhqT75uZw'
						icon={<YoutubeIcon />}
					/>
				</ul>
			</section>
			<section className='footer-section footer-section-right'>
				<ul className='contact-info'>
					<ContactItem
						classname='street'
						icon={<StreetIcon />}
						contactInfo={`87 Hype St. Evanston, IL, 60201`}
					/>
					<ContactItem
						classname='phone'
						icon={<PhoneIcon />}
						contactType='phone'
						contactInfo={`(123)456-7890`}
					/>
					<ContactItem
						classname='email'
						icon={<EmailIcon />}
						contactType='email'
						contactInfo={`nu.odphi@gmail.com`}
					/>
				</ul>
			</section>
		</footer>
	);
}

export default Footer;
