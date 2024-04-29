import React from 'react';
import './Main.scss';

import { Header } from '../header/Header';
import { ApiTopNew } from '../api/ApiTopNew';
import { ApiTopMovies } from '../api/ApiTopMovies';
import { ApiMovies } from '../api/ApiMovies';
import { ApiTopSeries } from '../api/ApiTopSeries';
import { ApiSeries } from '../api/ApiSeries';


const Main = () => {

    return(
        <section className='section section-main'>
            <div className='container'>
                <Header />
                <div className='main'>
                   
                    <div className='main-icon main-movie-new'>
                        <ApiTopNew />
                    </div>
                    
                    <div className='main-icon main-movie-top'>
                        <ApiTopMovies />
                    </div>

                    <div className='main-icon main-movie'>
                        <ApiMovies />                        
                    </div>

                    <div className='main-icon main-serial-top'>
                        <ApiTopSeries />                  
                    </div>

                    <div className='main-icon main-serial'>
                        <ApiSeries />
                    </div>
                </div>
            </div>
        </section>         
    )   
    
}

export default Main 