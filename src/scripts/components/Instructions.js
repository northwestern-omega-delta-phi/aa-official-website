import React from 'react';

function Instructions() {
	return (
		<figure className='recruitment-page__instructions'>
			<figcaption>
				<h3 className='recruitment-page__instructions-heading'>
					Steps to Take
				</h3>
			</figcaption>
			<ol className='recruitment-page__instruction-list'>
				<li className='recruitment-page__instruction'>
					Attend one Informational
				</li>
				<li className='recruitment-page__instruction'>
					Attend one Social Event
				</li>
				<li className='recruitment-page__instruction'>
					Fill out the application you receive after steps 1 and 2
				</li>
				<li className='recruitment-page__instruction'>
					Interview with the active house
				</li>
				<li className='recruitment-page__instruction'>
					Complete the 8-week educational process
				</li>
			</ol>
		</figure>
	);
}

export default Instructions;
