import React, { useState } from 'react';
import axios from 'axios'
import Movielist from './components/Movielist';
import './App.css';

function App() {
	const [movieResult, updateMovieResult] = useState([]);
	const [userquery, updateUserQuery] = useState('');
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
    const { value } = e.target;
    updateUserQuery(value)
    
	};
	const handleSubmit = (e) => {
	e.preventDefault()
	const fetchRecords = async()=>{
  setLoading(true);
  const res = await axios.get(`http://www.omdbapi.com/?s=${userquery}&apikey=${process.env.REACT_APP_API_KEY}`);
  updateMovieResult(res.data.Search)
  setLoading(false);
  console.log(movieResult)
}
fetchRecords()

    // fetch(`http://www.omdbapi.com/?s=${userquery}&apikey=${process.env.REACT_APP_API_KEY}`)
    // .then((resp)=>resp.json())
    // .then((data)=>{
    //   updateMovieResult(data.Search)
    //   console.log(movieResult, data )
    // })   
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

			<Movielist movieresult={[1,2,3,4,5]} />
		</div>
	);
}

export default App;
