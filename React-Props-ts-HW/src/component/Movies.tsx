import React from 'react'

interface Moviespro{
    img:string,
    name:string,
    rating:number,
    date:string,
    availability:boolean

}
const movies :Moviespro[]=[
{
img:'https://assets.voxcinemas.com/posters/P_HO00010043.jpg',
name:'CONDORS NEST',
rating:7.2,
date: '09 February 2023',

availability:true,
},
{
    img:'https://assets.voxcinemas.com/posters/P_HO00010024.jpg',
    name:'BLOOD',
    rating:9.5,
    date: '30 February 2023',
    
    availability:false, 
},
{
    img:'https://assets.voxcinemas.com/posters/P_HO00010040.jpg',
    name:'SEVDA MECBURI ',
    rating:8.7,
    date: '11 February 2023',
    
    availability:true, 
},
{
    img:'https://assets.voxcinemas.com/posters/P_HO00009440.jpg',
    name:'DUNGEONS & DRAGONS',
    rating:6.5,
    date: '20 April 2023',
    
    availability:false, 
},
{
    img:'https://assets.voxcinemas.com/posters/P_HO00009439.jpg',
    name:'CREED III',
    rating:8.5,
    date: '02 March 2023',
    
    availability:true, 
}


]
function Movies() {
    return (
      <div>
        {movies.map((movie, x) => {
          let avai: string = '✔Availability';
          if (!movie.availability) {
            avai = '😣Sorry available soon';
          }
          return (
            <div key={x} className="card">
              <img className="img" src={movie.img} />
              <h2>{movie.name}</h2>
              <p> ⭐{movie.rating}</p>

              <p>Release Date: {movie.date}</p>
              <p>{movie.availability}</p>
              {avai.length > 0 ? <p>{avai}</p> : <span></span>}
            </div>
          );
        })}
      </div>
    );
  }

export default Movies