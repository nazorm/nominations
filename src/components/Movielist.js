import React from 'react'
import Nominationspage from './Nominationspage'
function Movielist(props){
    const movies = props.movieresult.map((index, d)=>{
        return(
            <Nominationspage 
            key= {index}
            movie={d}/>
        )
    })
    return(
        <div>
        {movies}
        </div>
    )
}



export default Movielist