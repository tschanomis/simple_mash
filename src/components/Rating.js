import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Boxitems from './Boxitems';

import './style/Rating.css';

const letterApi = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]

export default function Rating(props) {

	const [items, setItems] = useState([]);
	const [prev, setPrev] = useState([]);

	const validMash = (e) => {
		const managePrev = [e, ...prev]
		if (managePrev.length === 4) {
			managePrev.splice(3)
		}
		setPrev(managePrev)
		props.updateNote(e)
	}

	const startRanking = () => {
		const selection = letterApi.filter(e => !prev.includes(e))

		const fetchLetter = () => {
			return (Math.round(Math.random() * (selection.length - 1)))
		}

		let itemOne
		let itemTwo
		while ((itemOne === itemTwo)) {
			itemOne = selection[fetchLetter()]
			itemTwo = selection[fetchLetter()]
		}
		setItems([itemOne, itemTwo])
	}

	useEffect(startRanking, [prev])

	return (
		<div className="Rating">
			{props.currentUser ?
				<div className="Rating-container">
					<h2>Which one ?</h2>
					<div className="Rating-container-action">
						<Boxitems letter={items[0]} validMash={validMash} />
						<p>OR</p>
						<Boxitems letter={items[1]} validMash={validMash} />
					</div>
					<Link to="/ranking"><button>results</button></Link>
				</div>
				:
				<Redirect to="/" />}
		</div>
	);
}
