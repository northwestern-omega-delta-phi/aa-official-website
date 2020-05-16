import React from 'react';

function Form() {
	return (
		<figure className='recruitment-page__form-figure'>
			<figcaption>
				<h3 className='recruitment-page__form-header--long'>
					Fill out this form if you are interested!
				</h3>
				<h3 className='recruitment-page__form-header'>Interested?</h3>
			</figcaption>
			<form className='recruitment-page__form'>
				<div className='recruitment-page__input-field'>
					<input
						className='recruitment-page__input'
						id='name'
						name='name'
						required
						type='text'
					/>
					<label
						className='recruitment-page__label recruitment-page__label--large'
						for='name'>
						Please enter your Full Name
					</label>
					<label
						className='recruitment-page__label recruitment-page__label'
						for='name'>
						Full Name
					</label>
					<span className='recruitment-page__input-underline'></span>
				</div>
				<div className='recruitment-page__input-field'>
					<input
						className='recruitment-page__input'
						id='year'
						name='year'
						required
						type='number'
					/>
					<label
						className='recruitment-page__label recruitment-page__label--large'
						for='year'>
						Please enter your School Year
					</label>
					<label
						className='recruitment-page__label recruitment-page__label'
						for='year'>
						School Year
					</label>
					<span className='recruitment-page__input-underline'></span>
				</div>
				<div className='recruitment-page__input-field'>
					<input
						className='recruitment-page__input'
						id='email'
						name='email'
						required
						type='email'
					/>
					<label
						className='recruitment-page__label recruitment-page__label--large'
						for='email'>
						Please enter your Email
					</label>
					<label
						className='recruitment-page__label recruitment-page__label'
						for='email'>
						Email
					</label>
					<span className='recruitment-page__input-underline'></span>
				</div>
				<div className='recruitment-page__input-field'>
					<input
						className='recruitment-page__input'
						id='major'
						name='major'
						required
						type='text'
					/>
					<label
						className='recruitment-page__label recruitment-page__label--large'
						for='major'>
						Please enter your Major
					</label>
					<label
						className='recruitment-page__label recruitment-page__label'
						for='major'>
						Major
					</label>
					<span className='recruitment-page__input-underline'></span>
				</div>
				<div className='recruitment-page__input-field'>
					<input
						className='recruitment-page__input'
						id='fun-fact'
						name='fun-fact'
						required
						type='text'
					/>
					<label
						className='recruitment-page__label recruitment-page__label--large'
						for='fun-fact'>
						Please enter a Fun Fact About Yourself
					</label>
					<label
						className='recruitment-page__label recruitment-page__label'
						for='fun-fact'>
						Fun Fact About Yourself
					</label>
					<span className='recruitment-page__input-underline'></span>
				</div>

				<button type='submit' className='recruitment-page__submit-button'>
					Submit
				</button>
			</form>
		</figure>
	);
}

export default Form;

// export function FormSmall() {
// 	return (
// 		<figure className='form-small'>
// 			<figcaption>
// 				<h3 className='screen-is-above-416px-text'>
// 					Fill out this form if you are interested!
// 				</h3>
// 				<h3 className='screen-is-below-416px-text'>Interested?</h3>
// 			</figcaption>
// 			<form>
// 				<div className='input-field'>
// 					<input id='name' name='name' required type='text' />
// 					<label for='name'>Full Name</label>
// 					<span></span>
// 				</div>
// 				<div className='input-field'>
// 					<input id='year' name='year' required type='number' />
// 					<label for='year'>School Year</label>
// 					<span></span>
// 				</div>
// 				<div className='input-field'>
// 					<input id='email' name='email' required type='email' />
// 					<label for='email'>Email</label>
// 					<span></span>
// 				</div>
// 				<div className='input-field'>
// 					<input id='major' name='major' required type='text' />
// 					<label for='major'>Major</label>
// 					<span></span>
// 				</div>
// 				<div className='input-field'>
// 					<input id='fun-fact' name='fun-fact' required type='text' />
// 					<label for='fun-fact'>Fun Fact About Yourself</label>
// 					<span></span>
// 				</div>

// 				<button type='submit' className='submit-button'>
// 					Submit
// 				</button>
// 			</form>
// 		</figure>
// 	);
// }
