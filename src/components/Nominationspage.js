import React from 'react';
import { Button } from 'antd';
import '../App.css';

function Nominationspage(props) {
	const nominations = props.nominationresult.map((d) => {
		return (
			<div className="movie" key={d.imdbID}>
				<img src={d.Poster} alt="poster" />
				<h4>Title: {d.Title}</h4>
				<h4>Year: {d.Year}</h4>
				<Button
					type="default"
					className="remove-nomination-btn movie-action-btn"
					onClick={() => props.handleRemove(d.imdbID)}
				>
					Remove Nomination
				</Button>
			</div>
		);
	});
	return (
		<div className="nominationspage">
			<div className="navigate">
				<h1 className="web-name">Nominated Movies</h1>
				<Button type="primary" className="direct-to-home-btn header-btn" onClick={props.directToHome}>
					Home
				</Button>
			</div>

			<div className="movies-container">{nominations}</div>
		</div>
	);
}

export default Nominationspage;
