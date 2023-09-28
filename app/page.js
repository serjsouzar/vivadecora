"use client"

import Button from "@/component/Button";
import Image from "next/image";
import { useEffect, useState } from "react"

export default function Home() {

  const [allMovies, setAllMovies] = useState([])
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjI2YmE3OGUzNTc1ZTk4OGZhMzc3MjkzMmNiNWE0YyIsInN1YiI6IjY0MDM1ZWRhNjdkY2M5MDA3ZGJlNGUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HsILUwF3KmfZGPm8ZQ3AnZVWHT0cRLGUNXag5H1MD8Q'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/popular', options)
      .then(response => response.json())
      .then(response => 
        setAllMovies(response.results))
      .catch(err => console.error(err));
  },[])
  

  function handleButton(){
    setIteration((prevIteration) => {
      if (prevIteration >= allMovies.length - 1) {
        return 0;
      } else {
        return prevIteration + 1;
      }
    });
  }

  return (
   <>
    {allMovies.map((movie, index) => (
       index === iteration ? (
       <div className="list_item" key={movie.id} style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
        <Button handleButton={handleButton}/>
       </div>
       )
       : (
       null
       )
    ))}
   </>
  )
}



/**
 *   <ul className="list">
      {allMovies.map((movie) => (
        <li className="list_item" key={movie.id} style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
          <div>{movie.original_title}</div>
        </li>
      ))}
    </ul>
 */