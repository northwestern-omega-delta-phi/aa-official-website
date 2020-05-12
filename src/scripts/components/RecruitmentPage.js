import React from 'react';

function RecruitmentPage() {
	return (
		<main className='recruitment-page'>
			<h2 className='page-heading'>Become a Knight of Omega Delta Phi</h2>
			<iframe
				className='recruitment-video'
				title='Become a Knight of Omega Delta Phi'
				width='560'
				height='315'
				src='https://www.youtube.com/embed/UNZqm3dxd2w'
				frameborder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen></iframe>
			<h3>Steps to Take</h3>
			<ol className='instructions'>
				<li>Attend one Informational</li>
				<li>Attend one Social Event</li>
				<li>Fill out the application you receive after steps 1 and 2</li>
				<li>Interview with the active house</li>
				<li>Complete the 8-week educational process</li>
			</ol>
			<figure className='form'>
				<figcaption>
					<h3>Fill out this form if you are interested!</h3>
				</figcaption>
				<form>
					<div className='input-field'>
						<input id='name' name='name' required type='text' />
						<label for='name'>Please enter your Full Name</label>
						<span></span>
					</div>
					<div className='input-field'>
						<input id='year' name='year' required type='number' />
						<label for='year'>Please enter your School Year</label>
						<span></span>
					</div>
					<div className='input-field'>
						<input id='email' name='email' required type='email' />
						<label for='email'>Please enter your Email</label>
						<span></span>
					</div>
					<div className='input-field'>
						<input id='major' name='major' required type='text' />
						<label for='major'>Please enter your Major</label>
						<span></span>
					</div>
					<div className='input-field'>
						<input id='fun-fact' name='fun-fact' required type='text' />
						<label for='fun-fact'>Please enter a Fun Fact about yourself</label>
						<span></span>
					</div>

					<button type='submit' className='submit-button'>
						Submit
					</button>
				</form>
			</figure>
		</main>
	);
}

export default RecruitmentPage;
