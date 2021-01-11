import React from 'react';
import '../App.css';

function Nominationspage(props){
    const nominations = props.nominationresult.map((d)=>{
        return(
            <div className='movie' key={d.imdbID}>
                 <img src={d.Poster} alt='poster'/>
            <h4>Title: {d.Title}</h4>
            <h4>Year: {d.Year}</h4>
            <button className='remove-nomination-btn movie-action-btn' onClick={()=>props.handleRemove(d.imdbID)}>Remove Nomination</button>
            </div>
        )
    })
return(
    <div className='nominationspage'>
        <div className='navigate'>
        <h1 className='web-name'>Shopify Movie Nominations</h1>
        <button className='direct-to-home-btn header-btn' onClick={props.directToHome}>Home</button>
        </div>
       
        
        <div className='movies-container'>
        {nominations}
        </div>
        
    </div>
)
}



export default Nominationspage