import React from 'react';

import { ApiTopMovies } from '../elements/api/ApiTopMovies';
import { ApiTopNew } from '../elements/api/ApiTopNew';
import { ApiMovies } from '../elements/api/ApiMovies';

const Films = () => {
  
    return(
        <section className='section section-films'>
            <div className='container'>
                <div className='films'>

                    <div className='main-icon main-movie'>
                        <ApiMovies />                        
                    </div>

                    <div className='main-icon main-movie-new'>
                        <ApiTopNew />
                    </div>

                    <div className='main-icon main-movie-top'>
                        <ApiTopMovies />
                    </div>

                </div>
            </div> 
        </section>         
    )
   
}

export default Films 
