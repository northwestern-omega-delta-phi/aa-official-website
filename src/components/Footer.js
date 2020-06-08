import React from "react";
import ContactItem from "./ContactItem";
import SocialMediaItem from "./SocialMediaItem";

import Logo from "../assets/images/logo";
import { ReactComponent as StreetIcon } from "../assets/images/location.svg";
import { ReactComponent as PhoneIcon } from "../assets/images/phone.svg";
import { ReactComponent as EmailIcon } from "../assets/images/email.svg";
import { ReactComponent as FacebookIcon } from "../assets/images/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/instagram.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/twitter.svg";
import { ReactComponent as YoutubeIcon } from "../assets/images/youtube.svg";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__section footer__section--left">
        <Logo className="footer__icon footer__icon--logo" />
        {/* <h3 className='footer__heading'>Omega Delta Phi's Purpose</h3>
				<p className='footer__text'>
					The purpose of this Brotherhood, a Service/Social fraternity dedicated
					to the needs and concerns of the community, shall be to promote and
					maintain the traditional values of Unity, Honesty, Integrity, and
					Leadership.
				</p> */}
        <ul className="footer__social-media-list">
          <SocialMediaItem
            destination="https://www.facebook.com/nuodphi/"
            icon={<FacebookIcon className="footer__icon" />}
          />
          <SocialMediaItem
            destination="https://www.instagram.com/nu.odphi/?hl=en"
            icon={<InstagramIcon className="footer__icon" />}
          />
          <SocialMediaItem
            destination="https://twitter.com/nu_odphi?lang=en"
            icon={<TwitterIcon className="footer__icon" />}
          />
          <SocialMediaItem
            destination="https://www.youtube.com/channel/UCphGKda9od2hJabhqT75uZw"
            icon={<YoutubeIcon className="footer__icon" />}
          />
        </ul>
      </section>
      <section className="footer__section footer__section--right">
        <ul className="footer__contact-list">
          <ContactItem
            icon={<StreetIcon className="footer__icon footer__icon--contact" />}
            contactType="address"
            contactInfo={`87 Hype St.
						Evanston, IL, 60201`}
          />
          <ContactItem
            icon={<PhoneIcon className="footer__icon footer__icon--contact" />}
            contactType="phone"
            contactInfo={`(123) 456-7890`}
          />
          <ContactItem
            icon={<EmailIcon className="footer__icon footer__icon--contact" />}
            contactType="email"
            contactInfo={`nu.odphi@gmail.com`}
          />
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
