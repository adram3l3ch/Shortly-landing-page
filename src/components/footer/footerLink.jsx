import React from 'react';

const FooterLink = ({ title, links }) => {
	return (
		<ul className='footer__navlinks'>
			<li className='navlink'>
				<h4 className='footer__navlinks__title'>{title}</h4>
			</li>
			{links.map(link => (
				<li className='navlink'>{link}</li>
			))}
		</ul>
	);
};

export default FooterLink;
