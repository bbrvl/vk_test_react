
// лучшие новинки 
// https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=movie&type=tv-series&type=cartoon&type=anime&year=2023&year=2024&rating.imdb=7-10


import React, { useEffect, useState } from 'react';
import { getNewData } from './Api';
import { MovieCard } from '../main/MovieCard'; 


export const ApiTopNew = () => {
    const [newMovies, setNewMovies] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
          try {
            const data = await getNewData();
            setNewMovies(data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchdata()
    }, []);

    return (
        <div className='main-icon main-movie-new'>
            <h3>Лучшие новинки</h3>
            <div className='main-icon_card'>
              {newMovies.docs?.map((movie) => (
                  <MovieCard movie={movie}/>
              ))}
            </div>
            
        </div>
    )
}

