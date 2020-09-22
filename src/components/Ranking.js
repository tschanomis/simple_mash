import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Ranking.css';

export default function Ranking(props) {

	const resetUser = () => {
		props.setUser(props.currentUser)
	}

	return (
		<div className="Ranking">
			{props.currentUser ?
				props.stock.length < 5 ?
					<div className="Ranking-alert">
						<h3 className="Ranking-alert-message">not enough ratings!</h3>
						<Link to="/">
							<button className="Ranking-alert-message-button">Return to mash</button>
						</Link>
					</div>
					:
					<ul className="Ranking-list">
						<li className="Ranking-list-header">
							<Link to="/"><p> &#60; mash</p></Link>
							<h2>{props.currentUser}'s results</h2>
							<Link onClick={resetUser} to="/"><p>quit &#62;</p></Link>
						</li>
						{props.stock.sort((a, b) => b.note - a.note).map((e, i) =>
							<li key={i}>
								<div className="Ranking-list-item" style={i === 0 ? { backgroundColor: '#3a5ec9', boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.75)', border: 'none', color: 'white' } : { backgroundColor: 'white' }}>
									<h3>{e.letter}</h3>
									<div className="Ranking-list-item-description">
										<p>letter : {e.letter}</p>
										<p>{e.note} {e.note > 1 ? 'points' : 'point'}</p>
									</div>
									<p className="Ranking-list-item-rank" style={{ backgroundColor: i === 0 ? '#CFB53B' : i === 1 ? '#C0C0C0' : i === 2 ? '#796221' : '' }}>{i + 1}</p>
								</div>
							</li>)}
					</ul>
				:
				<Redirect to="/" />
			}
		</div >
	);
}
