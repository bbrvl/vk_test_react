
//  сериалы для вас 

import React, { useEffect, useState } from 'react';
import { getSeries } from './Api';
import { MovieCard } from '../main/MovieCard'; 


export const ApiSeries = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
          try {
            const data = await getSeries();
            setSeries(data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchdata()
    }, []);

    return (
        <div className='main-icon main-movie'>
          <h3>Сериалы для вас</h3>
          <div className='main-icon_card'>
            {series.docs?.map((movie) => (
                  <MovieCard movie={movie}/>
              ))}
          </div>
            
        </div>
    )
}


