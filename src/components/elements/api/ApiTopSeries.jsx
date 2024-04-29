
//  топ 10 сериалов за 2023-24гг

import React, { useEffect, useState } from 'react';
import { getApiTop } from './Api';
import { MovieCard } from '../main/MovieCard'; 


export const ApiTopSeries = () => {
    const [topSeries, setTopSeries] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
          try {
            const data = await getApiTop();
            setTopSeries(data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchdata()
    }, []);

    return (
        <div className='main-icon main-serial-top'>
            <h3>Топ - 10 сериалов за месяц</h3>
            <div className='main-icon_card'>
              {topSeries.docs?.map((movie) => (
                  <MovieCard movie={movie}/>
              ))}
            </div>
            
        </div>
    )
}


