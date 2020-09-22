import React from 'react';
import './style/Boxitems.css';

export default function Boxitems(props) {

	const getPoints = () => {
		props.validMash(props.letter)
	}

	return (
		<div className="Boxitems">
			<p className="Boxitems-item" >{props.letter}</p>
			<button className="Boxitems-button" onClick={getPoints}>This one !</button>
		</div >
	);
}
