import React, { useState } from 'react';
import Movielist from './components/Movielist';
import './App.css';

function App() {
	const [movieResult, updateMovieResult] = useState([]);
	const [userquery, updateUserQuery] = useState('');

	const handleChange = (e) => {
    const { value } = e.target;
    updateUserQuery(value)
    
	};
	const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://www.omdbapi.com/?s=${userquery}&apikey=${process.env.REACT_APP_API_KEY}`)
    .then((resp)=>resp.json())
    .then((data)=>{
      updateMovieResult(data)
      console.log(data, movieResult )
    })   
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="userInput"
          placeholder="Search Movie"
          className ="userInput"
          onChange={handleChange}
          value={userquery}
          
				/>
				<button onSubmit={handleSubmit}> Enter</button>
			</form>

			<Movielist movieresult={movieResult} />
		</div>
	);
}

export default App;
