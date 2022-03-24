import React from 'react';
import './style.css';

const Button = ({ classes = '', label }) => {
	return <button className={`btn ${classes}`}>{label}</button>;
};

export default Button;
