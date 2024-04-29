import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navigation from './components/elements/navigation/Navigation';
import Main from './components/elements/main/Main';

import Films from './components/pages/Films';
import Serials from './components/pages/Serials';
import Popular from './components/pages/Popular';
import { MovieDetail } from "./components/pages/Movie";


const App = () =>  {
    return(
        <div className='app'>
            <Router>
                <Navigation />
                <Routes>
                    <Route path='vk_test_react' element={<Main />} /> 
                    <Route path='vk_test_react/films' element={<Films />} /> 
                    <Route path='vk_test_react/serials' element={<Serials />} /> 
                    <Route path='vk_test_react/popular' element={<Popular />} />
                    <Route path='vk_test_react/details/:filmId' element={<MovieDetail/>} />
                </Routes>

            </Router>
        </div>
                       
    )
}

export default App 
