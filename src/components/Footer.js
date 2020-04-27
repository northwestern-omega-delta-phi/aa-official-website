import React from 'react';

function Footer() {
	return (
		<footer className='main-footer'>
			<section className='footer-section footer-section-1'>
				<a className='footer-logo' href='#'>
					<img src='' alt='logo' />
				</a>
				<ul className='social-media-list'>
					<li>
						<a className='facebook-link' href='https://www.facebook.com'>
							<img src='' alt='Facebook' />
						</a>
					</li>
					<li>
						<a className='twitter-link' href='https://www.twitter.com'>
							<img src='' alt='Twitter' />
						</a>
					</li>
					<li>
						<a className='instagram-link' href='https://www.instagram.com'>
							<img src='' alt='Instagram' />
						</a>
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
