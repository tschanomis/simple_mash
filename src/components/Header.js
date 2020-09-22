import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';

export default function Header() {
	return (
		<div className="Header">
			<Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}><h3>letter.mash</h3></Link>
			<h1>Mash</h1>
			<Link to="/ranking" style={{ color: 'inherit', textDecoration: 'inherit' }}><h3>ranking</h3></Link>
		</div>
	);
}