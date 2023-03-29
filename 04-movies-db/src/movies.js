import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

// we can also write below function as "export const Movies = () => { 'code' }"
export default function Movies () {
    const {movies, genresList} = useGlobalContext();
    
    return <section className="container">
        <section className="movies-section">
            <section className="movies-container">
                {
                movies?movies.map((movie, index) => {
                    const {Poster, Title, Type, Year, imdbID,  poster_path, title, release_date, id, name, media_type, first_air_date} = movie
                    return (
                    <div className="movie-details" key={index}>
                    <Link className="movies-link" to={`${Type || media_type}/details/${Title || title || name}/${imdbID || id}/`}>
                        <article onMouseOut={(e) => {e.currentTarget.lastElementChild.classList.add('hidden')}} onMouseOver={(e) => {e.currentTarget.lastElementChild.classList.remove("hidden")}} key={index} className="movie-card">
                            <img className="movie-poster" src={Poster || `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`} alt={Title || title} />
                            <div className={`movie-info links ${window.innerWidth > 886 && 'hidden'}`}>
                                <h3 className="font-weight">{Title || title || name}</h3>
                                <h4 className="font-weight">Release Year : {Year || release_date || first_air_date}</h4>
                            </div>
                        </article>
                    </Link>
                    </div>
                    )
                }):<h2 className="danger-heading">Nothing to display</h2>
                }
            </section>
        </section>
        <article className="genres-list">
            <h4 className="align-text">Genres</h4>
            <article className="genres-boxes">
            <article className="genre-box-1">
                {genresList.map((genre)=>{
                    const {name, id} = genre
                    return <Link key={id} className='links' to={`/genre/${name}/${id}/1`}><span className="movies-heading" onClick={() => console.log(id)}>{name}</span></Link>
                })}
            </article>
            </article>
        </article>
    </section>
}