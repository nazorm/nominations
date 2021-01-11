import React from 'react'
function Movielist(props){
    const movies = props.movieresult.map(( d)=>{
        return(
            <div className='movie' key ={d.imdbID}>
            <img src={d.Poster} alt='poster'/>
            <h4>Title: {d.Title}</h4>
            <h4>Year: {d.Year}</h4>
            <button className='nominate-btn'onClick={()=>props.handleNomination(d.imdbID)}>Nominate</button>
        </div>
        )
    })
    return(
        <div className='movies'>
    	<form onSubmit={props.handleSubmit}>
				<input
					type="text"
					name="userInput"
					placeholder="Search Movie"
					className="userInput"
					onChange={props.handleChange}
					value={props.userquery}
				/>
				<button className='search-btn' onSubmit={props.handleSubmit}> Enter</button>
			</form>
            <button className='direct-to-nomination-btn'onClick={props.directToNomination}>Nomination</button>
        {props.loading? <p>Loading...</p> : movies}
        </div>
    )
}



export default Movielist