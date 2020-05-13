import React from 'react';

function RecruitmentPageMainContent() {
	return (
		<main className='recruitment-page-content'>
			<h2 className='page-heading'>
				Become a Knight
				<span className='screen-is-above-1050px-text'> of Omega Delta Phi</span>
			</h2>

			<h3 className='instructions-heading'>Steps to Take</h3>
			<ol className='instructions'>
				<li>Attend one Informational</li>
				<li>Attend one Social Event</li>
				<li>Fill out the application you receive after steps 1 and 2</li>
				<li>Interview with the active house</li>
				<li>Complete the 8-week educational process</li>
			</ol>
			<figure className='form-large'>
				<figcaption>
					<h3 className='screen-is-above-416px-text'>
						Fill out this form if you are interested!
					</h3>
					<h3 className='screen-is-below-416px-text'>Interested?</h3>
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
						<label for='fun-fact'>Please enter a Fun Fact About Yourself</label>
						<span></span>
					</div>

					<button type='submit' className='submit-button'>
						Submit
					</button>
				</form>
			</figure>

			<figure className='form-small'>
				<figcaption>
					<h3 className='screen-is-above-416px-text'>
						Fill out this form if you are interested!
					</h3>
					<h3 className='screen-is-below-416px-text'>Interested?</h3>
				</figcaption>
				<form>
					<div className='input-field'>
						<input id='name' name='name' required type='text' />
						<label for='name'>Full Name</label>
						<span></span>
					</div>
					<div className='input-field'>
						<input id='year' name='year' required type='number' />
						<label for='year'>School Year</label>
						<span></span>
					</div>
					<div className='input-field'>
						<input id='email' name='email' required type='email' />
						<label for='email'>Email</label>
						<span></span>
					</div>
					<div className='input-field'>
						<input id='major' name='major' required type='text' />
						<label for='major'>Major</label>
						<span></span>
					</div>
					<div className='input-field'>
						<input id='fun-fact' name='fun-fact' required type='text' />
						<label for='fun-fact'>Fun Fact About Yourself</label>
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

export default RecruitmentPageMainContent;
