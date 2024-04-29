import React from 'react';

import { ApiTopNew } from '../elements/api/ApiTopNew';
import { ApiSeries } from '../elements/api/ApiSeries';
import { ApiTopSeries } from '../elements/api/ApiTopSeries';

const Serials = () => {
  
    return(
        <section className='section section-films'>
            <div className='container'>
                <div className='serials'>
                    <div className='main-icon main-movie'>
                        <ApiSeries />                        
                    </div>

                    <div className='main-icon main-movie-new'>
                        <ApiTopNew />
                    </div>

                    <div className='main-icon main-movie-top'>
                        <ApiTopSeries />
                    </div> 

                </div>
            </div> 
        </section>         
    )
   
}

export default Serials 