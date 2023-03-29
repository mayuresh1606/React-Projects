import React, { useContext, useState } from "react";
import { useEffect } from "react";
const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [value, setValue] = useState('one piece');
    const [moviesActive, setMoviesActive] = useState(true);
    const [genresList, setGenresList] = useState([]);
    const [movieId, setMovieId] = useState(0);
    const [loaded, setLoaded] = useState(true);
    const [pages, setPages] = useState(0);
    const [details, setDetails] = useState([{}]);
    const [sidebar, setSidebar] = useState(false);
    const [tempMovies, setTempMovies] = useState([]);
    const [advancedSearch, setAdvancedSearch] = useState(false);
    const [reviews, setReviews] = useState([])

    const newApi = async () => {
        try{
            setLoaded(false)
            if (!advancedSearch){
                const url = `https://www.omdbapi.com/?s=${value? value.length >= 1? value :'one piece' : 'one piece'}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
                const response = await fetch(url);
                const data = await response.json();
                setMovies(data.Search)
                console.log(movies);
                setLoaded(true)
            }else{
                console.log(":ELse executed")
                const url = `https://api.themoviedb.org/3/search/person?api_key=7293c31ccbb64b53c645029964522652&query=${value}&include_adult=true`;
                const response = await fetch(url);
                const data = await response.json();
                console.log(data.results)
                if (data.results.length > 0){
                    let newMovies = data.results[0].known_for
                    // newMovies = newMovies.map(async(movie, index) => {
                    //     const tempUrl = `https://api.themoviedb.org/3/tv/${movie.id}/external_ids?api_key=7293c31ccbb64b53c645029964522652`
                    //     const tempResponse = await fetch(tempUrl);
                    //     const tempData = await tempResponse.json();
                    //     movie.id = tempData.imdb_id;
                    //     return movie;
                    // })
                    setMovies(newMovies);
                    // await setMovies(newMovies.map(async(movie) => {
                    //     const tempUrl = `https://api.themoviedb.org/3/${movie.media_type}/${movie.id}/external_ids?api_key=7293c31ccbb64b53c645029964522652`
                    //     const tempResponse = await fetch(tempUrl);
                    //     const tempData = await tempResponse.json();
                    //     movie.id = tempData.imdb_id;
                    //     return movie;
                    // }))
                }else{
                    setMovies([]);
                }
                setLoaded(true)
            }
        }catch(err){
            console.log(err)
        }
    }

    // genres fetch
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`
    const fetchGenres = async() => {
        const response = await fetch(genreUrl);
        const data = await response.json();
        const {genres} = data
        setGenresList(genres);
    }
    // fetch single movie details
    const fetchTvdbSeries = async (id) => {
            console.log(id);
            let url = `https://api.themoviedb.org/3/find/${id}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&external_source=imdb_id`
            if (advancedSearch){
                url = `https://api.themoviedb.org/3/find/${id}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&external_source=tvdb_id`;
            }
            const response = await fetch(url);
            const data = await response.json()
            if (data.tv_results || data.tv_episode_results){
                console.log(data)
                setDetails(data.tv_results || data.tv_episode_results);
                console.log(details);
            }
        }

    const fetchDetails = async (title, type, id) => {
        // setLoaded(false);
        if (type === "tv"){
            type = "series";
        }
        const url = `https://www.omdbapi.com/?t=${title}&type=${type}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
        const response = await fetch(url)
        const data = await response.json();
        if (data.Error){
            console.log(data);
            if (type === "series"){
                type = "tv";
            }
            fetchTvdbSeries(id);
        }
        else{
            setDetails([data]);
        }
        // setLoaded(true);
    }
    const fetchPopularMovies = async (pageNo) => {
        // setLoaded(false);
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNo}&with_watch_monetization_types=flatrate`
        let pagesList = [];
        const response = await fetch(url)
        const data = await response.json()
        setMovies(data.results);
        setPages(() => {
            for (let i = 1; i <= 500; i++){
                pagesList = [...pagesList, i]
            }
            return pagesList;
        });
        // setLoaded(true)
    }
    const fetchPopularSeries = async (pageNo) => {
        // setLoaded(false)
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNo}&with_watch_monetization_types=flatrate`;
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results)
        // setLoaded(true)
    }
    useEffect(()=> {
        fetchGenres();
        console.log('useEffect called new API');
        newApi();
    }, [value])

    return <AppContext.Provider value={{tempMovies, setTempMovies, fetchPopularMovies, fetchPopularSeries, fetchDetails, fetchGenres, newApi, sidebar, setSidebar, moviesActive, setMoviesActive, details, setDetails, pages, setPages, loaded, setLoaded, movieId, setMovieId, genresList, movies, setValue, value, setMovies, advancedSearch, setAdvancedSearch, reviews, setReviews}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}