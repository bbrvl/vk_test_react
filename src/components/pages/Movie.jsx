import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetail } from "../elements/api/Api";

import '../elements/main/Main.scss';


export const MovieDetail = () => {
    const {filmId} = useParams();
    const [movie, setMovie] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchdata = async () => {
          try {
            const data = await getDetail(filmId);
            if (data.error) {
                return navigate("/")
            }
            setMovie(data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchdata()
    }, []); 

    const getImage = () => {
        if (movie.backdrop?.url){
            return movie.backdrop?.url
        } else {
            return movie.poster?.url
        }
    }
    return (
        <div className='main-icon main-movie'>
            <div className="main-icon_title">
                <div className="main-icon_title__info">
                    <h3>{movie.name}</h3>
                    <p>Год выпуска: {movie.year}</p>
                    <p>{movie.description}</p>

                    <div className="main-icon_title__info__genres">{movie.genres?.map((genres) => (
                        <p>{genres.name}</p>
                    ))}</div>
                </div>

                <div className="main-icon_title__img">
                    <img src={getImage()} alt={movie.name} className="main-icon_title__img_new" />
                </div>
            </div>
        </div>
    )
}


