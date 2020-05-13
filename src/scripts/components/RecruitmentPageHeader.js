import React from 'react';

function RecruitmentPageHeader() {
	return (
		<header className='video-header'>
			<iframe
				className='recruitment-video'
				title='Become a Knight of Omega Delta Phi'
				width='900'
				height='675'
				src='https://www.youtube.com/embed/UNZqm3dxd2w?autoplay=1'
				frameborder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen></iframe>
		</header>
	);
}

export default RecruitmentPageHeader;
