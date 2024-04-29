import React from 'react';

import './Navigation.scss'
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {

    render () {
        const activeLink = "nav-list__link nav-list__link--active";
        const normalLink = "nav-list__link";
        
        const isActiveLink = (isActive) => {
            return isActive ? activeLink : normalLink
        }

        return(
            <section className='section section-navigation'>
                <div className='container'>
                    <div className='navigation'>
                        <h2 className='navigation-name'>Поиск кино</h2>
                    
                        <div className='navigation-row'>

                            <ul className='navigation-row_list'>
                                <li className="navigation-row_list__item">
                                    <NavLink to='/' className={({ isActive }) => isActiveLink(isActive)}>  
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="navigation-row_list__item">
                                    <NavLink to='/films' className={({ isActive }) => isActiveLink(isActive)}>
                                        Фильмы
                                    </NavLink>
                                </li>
                                <li className="navigation-row_list__item">
                                    <NavLink to='/serials' className={({ isActive }) => isActiveLink(isActive)}>
                                        Сериалы
                                    </NavLink>
                                </li>
                                <li className="navigation-row_list__item">
                                    <NavLink to='/popular' className={({ isActive }) => isActiveLink(isActive)}>
                                        Избранное
                                    </NavLink>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </section>         
        )
    }
}

export default Navigation 