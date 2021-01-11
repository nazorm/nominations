import React from 'react'


function Nominationspage(props){
    const nominations = props.nominationresult.map((d)=>{
        return(
            <div className='nominated-movie' key={d.imdbID}>
                 <img src={d.Poster} alt='poster'/>
            <h4>Title: {d.Title}</h4>
            <h4>Year: {d.Year}</h4>
            <button className='remove-nomination-btn' onClick={()=>props.handleRemove(d.imdbID)}>Remove Nomination</button>
            </div>
        )
    })
return(
    <div className='nominated-movie'>
        <button className='direct-to-home-btn' onClick={props.directToHome}>Home</button>
        {nominations}
    </div>
)
}



export default Nominationspage