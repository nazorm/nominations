import React from 'react';
import '../App.css';
import { Button, Input } from 'antd';

const { Search } = Input;

function Movielist(props) {
	const movies = props.movieresult.map((d) => {
		return (
			<div className="movie" key={d.imdbID}>
				<img src={d.Poster} alt="poster" />
				<h4>Title: {d.Title}</h4>
				<h4>Year: {d.Year}</h4>
				<Button
					type="default"
					className=   {"nominate-btn movie-action-btn"}
                    onClick={() => props.handleNomination(d.imdbID)}
                     disabled= {props.clickedbuttons.includes`${d.imdbID}`}
				>
					Nominate
				</Button>
			</div>
		);
	});
	return (
		<div className="home-page">
			<div className="movie-header home-movie-header">
				<div className="navigate">
					<h1 className="web-name">Shopify Movie Nominations</h1>
					<Button
						type="primary"
						className="direct-to-nomination-btn header-btn"
                        onClick={props.directToNomination}
                        
					>
						Nominations
					</Button>
				</div>

				<Search
					className="form"
					placeholder="Search Movies"
					allowClear
					enterButton="Search"
					size="medium"
					onChange={props.handleChange}
					value={props.userquery}
					onSearch={props.handleSubmit}
				/>
			</div>
			<div className="movies-container">{props.loading ? <p>Loading...</p> : movies}</div>
		</div>
	);
}

export default Movielist;
