import React, { useState } from 'react';
import axios from 'axios';

import Movielist from './components/Movielist';
import Nominationspage from './components/Nominationspage';
import './App.css';

function App() {
	const [movieResult, setMovieResult] = useState([]);
	const [nominateListPage, setnominateListPage] = useState([]);
	const [userquery, updateUserQuery] = useState('');
	const [loading, setLoading] = useState(false);
	const [moviePage, setMoviePage] = useState(true);
	const [nominationPage, setNominationPage] = useState(false);
	const [clickedbuttons, setclickedbuttons] = useState([])
	const clickedbtns = [];
	//get user movie search
	const handleChange = (e) => {
		const { value } = e.target;
		updateUserQuery(value);
	};
	//handle movie search
	const handleSubmit = () => {
		if(userquery===""){
			alert('Enter a Movie Name')
			return
		}else{
			const fetchMovies = async () => {
				setLoading(true);
				const res = await axios.get(
					`https://www.omdbapi.com/?s=${userquery}&apikey=${process.env.REACT_APP_API_KEY}`
				);
				setMovieResult(res.data.Search);
				setLoading(false);
			};
			fetchMovies();
			updateUserQuery("")
		}
		
	};
	//handle movie nomination
	const handleNomination = (id) => {
		const nomination = movieResult.filter((movie) => {
			return movie.imdbID === id;
		});
	
		clickedbtns.push(id)
		setclickedbuttons(clickedbtns)
		const nominated = [...nominateListPage, ...nomination];
		setnominateListPage(nominated);
		if (nominateListPage.length >= 5) {
			alert('You can only nominate 5 movies');	
		}
	};
	// handle remove from nomination list
	const handleRemove = (id) => {
		const filtered = nominateListPage.filter((movie) => {
			return movie.imdbID !== id;
		});
		setnominateListPage(filtered);
	};
	//handle navigation to nomination page
	const directToNomination = () => {
		setMoviePage(false);
		setNominationPage(true);
	};
	//handle navigation to home page
	const directToHome = () => {
		setMoviePage(true);
		setNominationPage(false);
	};
	return (
		<div className="App">
			{moviePage && (
				<Movielist
					movieresult={movieResult}
					handleNomination={handleNomination}
					loading={loading}
					userquery={userquery}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					directToNomination={directToNomination}
					clickedbuttons={clickedbuttons}
				/>
			)}

			{nominationPage && (
				<Nominationspage
					nominationresult={nominateListPage}
					directToHome={directToHome}
					handleRemove={handleRemove}
				/>
			)}
		</div>
	);
}

export default App;
