import React from 'react';

import { ApiTopNew } from '../elements/api/ApiTopNew';
import { ApiSeries } from '../elements/api/ApiSeries';
import { ApiMovies } from '../elements/api/ApiMovies';

const Popular = () => {
  
    return(
        <section className='section section-films'>
            <div className='container'>
                <div className='popular'>
                    <div className='main-icon main-movie'>
                        <ApiTopNew />                        
                    </div>

                    <div className='main-icon main-movie-new'>
                        <ApiMovies />
                    </div>

                    <div className='main-icon main-movie-top'>
                        <ApiSeries />
                    </div>

                </div>
            </div> 
        </section>         
    )
   
}

export default Popular 