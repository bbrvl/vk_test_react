
// лучшие новинки - #1 - ApiTopNew
// https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=movie&type=tv-series&type=cartoon&type=anime&year=2023&year=2024&rating.imdb=7-10



const API_KEY = 'MY2JGE7-WPRMTAS-J53H0ES-4J384G9';

export const getNewData = async () => {
    
    const API_URL_NEWMOVIES = 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=movie&type=tv-series&type=cartoon&type=anime&year=2023&year=2024&rating.imdb=7-10';

    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': API_KEY}
    };
    
    const response = await fetch(API_URL_NEWMOVIES, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
    
    return response;
}


//  топ 10 фильмов за месяц - #2 - ApiTopMovies
// 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=movie&year=2023&year=2024&rating.imdb=7-10'

export const getApiData = async () => {
    const API_URL_TOPMOVIES = 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=movie&year=2023&year=2024&rating.imdb=7-10';

    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': API_KEY}
    };
    
    const response = await fetch(API_URL_TOPMOVIES, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
    
    return response;
}


//  фильмы для вас - #3 - ApiMovies
// 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=movie&type=anime&year=2022&year=2024&rating.imdb=7-10'

export const getMovies = async () => {
    const API_URL_MOVIES = 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=movie&type=anime&year=2022&year=2024&rating.imdb=7-10';

    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': API_KEY}
    };
    
    const response = await fetch(API_URL_MOVIES, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
    
    return response;
}


// топ 10 сериалов за месяц #4 - ApiTopSeries
// 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=tv-series&year=2023&year=2024&rating.imdb=7-10'


export const getApiTop = async () => {
    const API_URL_TOPTVSERIES = 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=tv-series&year=2023&year=2024&rating.imdb=7-10';
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': API_KEY}
    };
    
    const response = await fetch(API_URL_TOPTVSERIES, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
    
    return response;
}

// сериалы для вас - #5 - ApiSeries
// 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=animated-series&type=tv-series&year=2022&year=2024&rating.imdb=7-10'

export const getSeries = async () => {
    const API_URL_SERIES = 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=animated-series&type=tv-series&year=2022&year=2024&rating.imdb=7-10';

    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': API_KEY}
    };
    
    const response = await fetch(API_URL_SERIES, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
    
    return response;
}

// клип по карточке фильма

export const getDetail = async (id) => {
  const API_URL_DETAIL = `https://api.kinopoisk.dev/v1.4/movie/${id}`;

  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': API_KEY}
  };
  
  const response = await fetch(API_URL_DETAIL, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
  
  return response;
}