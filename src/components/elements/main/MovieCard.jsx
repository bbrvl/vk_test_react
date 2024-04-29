import React from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
    const cardUrl = `/vk_test_react/details/${movie.id}`
    return (
        <Link style={{ textDecoration: 'none' }} to={cardUrl} className='link'>
            <div className='main-icon__info' key={movie.id}>

                <img src={movie.poster.url !== 'N/A' ? movie.poster.url : "https://via.placeholder.com/400"} alt={movie.name} />
                <p>{movie.name}, {movie.year}</p>
                
            </div>
        </Link>
    )
}


                        