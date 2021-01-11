import React from 'react';
import '../App.css';
function Movielist(props){
    const movies = props.movieresult.map(( d)=>{
        return(
            <div className='movie' key ={d.imdbID}>
            <img src={d.Poster} alt='poster'/>
            <h4>Title: {d.Title}</h4>
            <h4>Year: {d.Year}</h4>
            <button className='nominate-btn movie-action-btn'
            onClick={()=>props.handleNomination(d.imdbID)}>
                Nominate</button>
        </div>
        )
    })
    return(
        <div className='home-page'>
            <div className='movie-header home-movie-header'>
                <div className='navigate'>
                    <h1 className='web-name'>Shopify Movie Nominations</h1>
                <button className='direct-to-nomination-btn header-btn'onClick={props.directToNomination}>Nominations</button>
                </div>
                
    	<form className='form' onSubmit={props.handleSubmit}>
				<input
					type="text"
					name="userInput"
					placeholder="Search Movie"
					className="userInput"
					onChange={props.handleChange}
					value={props.userquery}
				/>
				<button className='search-btn header-btn' onSubmit={props.handleSubmit}> Enter</button>
			</form>
            
            </div>
            <div className='movies-container'>
            {props.loading? <p>Loading...</p> : movies}
            </div>
        
        </div>
    )
}



export default Movielist