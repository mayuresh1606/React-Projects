import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

export const Details = () => {
    const {details, setLoaded, fetchDetails, reviews, setReviews} = useGlobalContext();
    const [videos, setVideos] = useState();
    const [similarMovies, setSimilarMovies] = useState();
    
    let {title, type, id} = useParams();


    // if (type === "series"){
    //     type = "tv";
    // }
    let movieTitle = title
    movieTitle = movieTitle.split("")
    let newChar = ''
    movieTitle.map((char) => {
        if (char === " "){
            char = '+'
            newChar += char
            return char
        }
        newChar += char
        return char
    })

    const fetchReviews = async (id) => {
        try{
            console.log(id, "REVIEws id")
            const url = `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=7293c31ccbb64b53c645029964522652`;
            console.log(url)
            const response = await fetch(url)
            const data = await response.json();
            setReviews(() => data.results.map((review) => {
                const {author_details} = review
                if (author_details.avatar_path !== null){
                    if (author_details.avatar_path.includes("http")){
                        author_details.avatar_path = author_details.avatar_path.slice(1, author_details.avatar_path.length)
                    }else{
                        author_details.avatar_path = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    }
                }else{
                    author_details.avatar_path = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                }
                return review;
            }))
        }catch(err){
            console.log(err);
        }
    }
    
    const fetchVideos = async(id) => {
        try{
                // const url = `https://api.themoviedb.org/3/find/${id}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&external_source=imdb_id`
                // const response = await fetch(url);
                // const data = await response.json()
                // if (data.tv_results || data.tv_episode_results){
                //     if (data.tv_results){
                //         id = data.tv_results[0].id
                //     }
                //     if (data.tv_episode_results){
                //         id = data.tv_episode_results[0].id
                //     }
                // }
            
            const url = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=7293c31ccbb64b53c645029964522652`;
            const response = await fetch(url);
            const data = await response.json();
            setVideos(() => data.results.map((video) => {
                if (video.site === "YouTube"){
                    if (video.type.includes("railer") || video.type.includes("easer")){
                        return video;
                    }
                }
            }))
        }catch(err){
            console.log(err)
        }
    }

    const fetchSimilarMovies = async (id) => {
        const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=7293c31ccbb64b53c645029964522652`
        const response = await fetch(url);
        const data = await response.json();
        setSimilarMovies(data.results);
    }

    useEffect(() => {
        setLoaded(false)
        fetchDetails(newChar, type, id);
        // if (type !== "series" && type !== "tv"){
        if (type !== "series" && type !== "tv"){
            fetchVideos(id);
            fetchReviews(id);
            fetchSimilarMovies(id);
        }
        // }
        console.log("useEffect called details");
        setLoaded(true)
    }, [title])

    return <>
            {details.map((movieList, index) => {
                    const {Plot,Released, air_date, Title, imdbRating, imdbID, Poster, Actors, Awards, Country, Genre, Language} = movieList
                    return <section className="single-movie-container" key={index}>
                        <div className="movie-details-div">
                        {videos && <><h2 className="color-letter-spacing">Movie Trailer / Teaser</h2>
                            <div className="underline grey full-width"></div></>}
                        {videos && <><div className="movie-videos">
                            {videos && videos.map((video) => {
                                if (video !== undefined){ 
                                    return <iframe className="iframe" key={video.id} src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                }})}
                        </div></>}
                        <section className="single-movie">
                            <article className="single-movie-img">
                                <img src={Poster} className="movie-poster single-movie-poster" alt="" />
                            </article>
                            <article className="single-movie-info">
                                <div className="single-movie-details" key={imdbID}>
                                    <h2 className="needed-margin"><span className="text-hig hlight">Title: </span>{Title}</h2>
                                    <p className="needed-margin"><span className="text-highlight">Overview: </span>{Plot}</p>
                                    <p className="needed-margin"><span className="text-highlight">Actors: </span>{Actors}</p>
                                    <p className="needed-margin"><span className="text-highlight">Release Date: </span>{Released || air_date}</p>
                                    <p className="needed-margin"><span className="text-highlight">Awards: </span>{Awards}</p>
                                    <p className="needed-margin"><span className="text-highlight">Country: </span>{Country}</p>
                                    <p className="needed-margin"><span className="text-highlight">Genre: </span>{Genre}</p>
                                    <p className="needed-margin"><span className="text-highlight">Language: </span>{Language}</p>
                                    <p className="needed-margin"><span className="text-highlight">Imdb Rating: </span>{imdbRating}</p>
                                </div>
                            </article>
                        </section>
                        <section className="similar-movies">
                            {similarMovies && <>
                            <h2 className="color-letter-spacing">Similar Movies</h2>
                            <div className="underline grey full-width"></div>
                            <div className="movie-videos">
                            {similarMovies && similarMovies.map((movie) => {
                            const {Poster, Title, Type, Year, imdbID,  poster_path, title, release_date, id, name, media_type, first_air_date} = movie
                            return <div style={{marginBottom: "0"}} className="movie-details" key={id}>
                                <Link className="movies-link" to={`/movie/details/${Title || title}/${imdbID || id}/`}>
                                    <article key={index} className="movie-card">
                                        <img className="movie-poster" src={Poster || `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`} alt={Title || title} />
                                        <div className={`links`}>
                                            <h3 className="font-weight">{Title || title}</h3>
                                            <h4 className="font-weight">Release Year : {Year || release_date}</h4>
                                        </div>
                                    </article>
                                </Link>
                            </div>
                            })
                            }
                            </div>
                            </>
                            }
                        </section>
                        <section className="movie-reviews">
                        {reviews.length ? <> <h2 className="color-letter-spacing">Reviews</h2>
                            <div className="underline grey full-width"></div></> : <h2 className="danger-heading">No reviews were found for this movie!!!</h2>
                        }
                        {reviews && reviews.map((review) => {
                            return <div key={review.id} className="review">
                                <div className="author">
                                    <img className="author-img" src={review.author_details.avatar_path} alt="user" />
                                    <span className="author-name">{review.author}</span>
                                    <span className="author-post-time">{review.created_at.slice(0, 10)}</span>
                                    { review.author_details.rating !== null && <span className="text-highlight review-rating">{review.author_details.rating}/10</span>}
                                </div>
                                <div className="author-review">
                                    <p className="needed-margin">{review.content.length > 700 && <>{`${review.content.slice(0, 700)}`} <span className="text-read-more" onClick={(e) => {
                                        if (e.currentTarget.textContent === "read more..."){
                                            e.currentTarget.parentElement.textContent = review.content;
                                            e.currentTarget.textContent = "read less..."
                                        }else{
                                            e.currentTarget.parentElement.textContent = review.content.slice(0, 700);
                                            e.currentTarget.textContent = "read more..."
                                        }
                                    }} >read more...</span> </>}
                                    {
                                        review.content.length <= 700 && review.content
                                    }
                                    </p>
                                </div>
                            </div>
                        })}
                        </section>
                    </div>
                    </section>
            })}
            </>
}
