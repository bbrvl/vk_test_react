
//  топ 10 фильмов за 2023-24гг

import React, { useEffect, useState } from 'react';
import { getApiData } from './Api';
import { MovieCard } from '../main/MovieCard'; 


export const ApiTopMovies = () => {
    const [topMovie, setTopMovie] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
          try {
            const data = await getApiData();
            setTopMovie(data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchdata()
    }, []);

    return (
        <div className='main-icon main-movie-top'>
            <h3>Топ - 10 фильмов за месяц</h3>
            <div className='main-icon_card'> 
                {topMovie.docs?.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
            </div>
            
        </div>
    )
}


