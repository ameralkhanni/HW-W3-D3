import React from 'react'


interface TVShowspro{
    img:string,
    name:string,
    rating:number,
    date:string,
    availability:boolean

}
const shows :TVShowspro[]=[
    {
    img:'https://assets.voxcinemas.com/posters/P_HO00009502.jpg',
    name:'BANDIT',
    rating:9.5,
    date: '09 February 2023',
    
    availability:true,
    },
    {
        img:'https://assets.voxcinemas.com/posters/P_HO00009486.jpg',
        name:'OPPENHEIMER',
        rating:7.9,
        date: ' 20 July 2023',
        
        availability:true, 
    },
    {
        img:'https://assets.voxcinemas.com/posters/P_HO00010023.jpg',
        name:'THANKAM',
        rating:6.3,
        date: ' 26 January 2023',
        
        availability:false, 
    },
    {
        img:'https://assets.voxcinemas.com/posters/P_HO00010013.jpg',
        name:'ALICE, DARLING',
        rating:8.0,
        date: '02 February 2023',
        
        availability:false, 
    },
    {
        img:'https://assets.voxcinemas.com/posters/P_HO00009981.jpg',
        name:'CRAZY BEAR',
        rating:6.9,
        date: '09 March 2023',
        
        availability:true, 
    }
]

function TVShows() {
  return (
    <div>
        {shows.map((shows, x) => {
          let avai: string = '✔Availability';
          if (!shows.availability) {
            avai = '😣Sorry available soon';
          }
          return (
            <div key={x} className="card">
              <img className="img" src={shows.img} />
              <h2>{shows.name}</h2>
              <p> ⭐{shows.rating}</p>

              <p>Release Date: {shows.date}</p>
              <p>{shows.availability}</p>
              {avai.length > 0 ? <p>{avai}</p> : <span></span>}
            </div>
          );
        })}
      </div>
    );
  }

export default TVShows