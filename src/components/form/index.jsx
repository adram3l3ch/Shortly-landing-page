import React, { useReducer } from 'react';
import { shortenLink } from '../../API';
import Button from '../button';
import reducer, { hideError, setLink, showError } from './reducer';
import './style.css';

const initialState = {
	isError: false,
	errorMessage: '',
	link: '',
};

const regExp =
	/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

const Form = ({ setLinks }) => {
	const [{ isError, errorMessage, link }, dispatch] = useReducer(reducer, initialState);

	const handleSubmit = async e => {
		e.preventDefault();
		if (link === '') {
			dispatch(showError('please add a link'));
		} else if (!regExp.test(link)) {
			dispatch(showError('please add a valid link'));
		} else {
			dispatch(hideError());
			try {
				const { result } = await shortenLink(link);
				setLinks(links => [
					{ original: link, shortened: result.full_short_link2 },
					...links.filter(_link => _link.original !== link),
				]);
				dispatch(setLink(''));
			} catch (error) {
				dispatch(showError(error.message));
			}
		}
	};

	return (
		<form className='shortenForm' onSubmit={handleSubmit}>
			<div className={isError ? `shortenForm__input error` : `shortenForm__input`}>
				<input
					type='text'
					placeholder='Shorten a link here...'
					value={link}
					onChange={e => dispatch(setLink(e.target.value))}
				/>
				{isError && <p className='errorText'>{errorMessage}</p>}
			</div>
			<Button label='Shorten It!' classes='shorten' />
		</form>
	);
};

export default Form;
