import React from 'react';
import ImageLink from './ImageLink';
import ODPLogo from '../assets/odp.gif';
import FacebookLogo from '../assets/facebook.png';
import InstagramLogo from '../assets/instagram.png';
import TwitterLogo from '../assets/twitter.png';
import YoutubeLogo from '../assets/youtube.png';

function Footer() {
	return (
		<footer className='main-footer'>
			<section className='footer-section footer-section-1'>
				<ImageLink class='main-logo' link='#' src={ODPLogo} alt='Main Logo' />
				<h3 className='footer-section-header'>Social Media</h3>
				<ul className='social-media-list'>
					<li>
						<ImageLink
							class='facebook-link'
							link='https://www.facebook.com/nuodphi/'
							src={FacebookLogo}
							alt='Facebook'
						/>
					</li>
					<li>
						<ImageLink
							class='instagram-link'
							link='https://www.instagram.com/nu.odphi/?hl=en'
							src={InstagramLogo}
							alt='Instagram'
						/>
					</li>
					<li>
						<ImageLink
							class='twitter-link'
							link='https://twitter.com/nu_odphi?lang=en'
							src={TwitterLogo}
							alt='Twitter'
						/>
					</li>
					<li>
						<ImageLink
							class='youtube-link'
							link='https://www.youtube.com/channel/UCphGKda9od2hJabhqT75uZw'
							src={YoutubeLogo}
							alt='Youtube'
						/>
					</li>
				</ul>
			</section>
			<section className='footer-section footer-section-2'>
				<h3 className='footer-section-header'>Contact Us</h3>
				<address>
					1987 Hype St, Apt 87 <br />
					Evanston, IL, 60201 <br />
					Phone: (123)456-7890 <br />
					Email: nuodphi@gmail.org
				</address>
			</section>
			<section className='footer-section footer-section-3'>
				<h3 className='footer-section-header'>Message from a Brother</h3>
				{/*
          I was thinking a video like the national site, but we dont have one yet
          So a quote is a sub. I will put code for a video down here though in
          case we wanna add it.

          <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
          </video>
        */}
				<p className='footer-message'>
					<q>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
						pharetra ligula non neque aliquam lobortis. Ut tincidunt est non
						rutrum feugiat. Maecenas mauris arcu, lobortis.
					</q>
					- Sir Brother
				</p>
			</section>
		</footer>
	);
}

export default Footer;

// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
