
//  фильмы для вас 

import React, { useEffect, useState } from 'react';
import { getMovies } from './Api';
import { MovieCard } from '../main/MovieCard'; 

// import "../main/Main.scss";

export const ApiMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
          try {
            const data = await getMovies();
            setMovies(data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchdata()
    }, []);

    return (
        <div className='main-icon main-movie'>
            <h3>Фильмы для вас</h3>
            <div className='main-icon_card'>
                {movies.docs?.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
            </div>
            
        </div>
    )
}


