import React from 'react';
import Button from '../button';
import './style.css';

const Form = () => {
	return (
		<form className='shortenForm'>
			<input
				className='shortenForm__input'
				type='url'
				required
				placeholder='Shorten a link here...'
			/>
			<Button label='Shorten It!' classes='shorten' />
		</form>
	);
};

export default Form;
