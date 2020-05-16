import React from 'react';
import Form from './Form';
import Instructions from './Instructions';

function RecruitmentPageMainContent() {
	return (
		<main className='recruitment-page__main-content'>
			<h2 className='recruitment-page__main-heading'>
				Become a Knight
				<span className='recruitment-page__heading--long'>
					{' '}
					of Omega Delta Phi
				</span>
			</h2>

			<Instructions />

			<Form />
		</main>
	);
}

export default RecruitmentPageMainContent;
