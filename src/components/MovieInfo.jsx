import popularMovies from '../data/popularMovies.json'
import {IMAGE_URL} from "../tmdbApiConfig";

function MovieInfo() {

    const movie = popularMovies[7];
    return (
        <div className={'min-h-screen text-white flex flex-row justify-evenly items-center gap-24 relative bg-gradient-to-t from-black k via-black to-transparent'}>
            <img style={{zIndex: '-1'}} className={'absolute top-0 bg-gradient-to-b from to-black blur-sm brightness-50'} src={IMAGE_URL + movie.backdrop_path}
                 loading={'lazy'}></img>
            <img className={'hidden md:block h-96 rounded-2xl'} src={IMAGE_URL + movie.poster_path}></img>
            <div className={'flex flex-col gap-10 justify-between'}>
                <p className={'m-10 text-6xl font-bold'}>{movie.title}</p>
                <div className={'mx-10 flex flex-row gap-6 items-start'}>
                    {movie.genre_ids.map((genre) => (
                        <div className={'border-2 border-red-800 rounded-3xl py-2 px-10 '}>{genre}</div>
                    ))
                    }
                </div>
                <p className={'m-10 text-xl'}>{movie.overview}</p>
                <button className={'mx-10 bg-red-800 rounded-3xl w-32 p-3'}>Book Now</button>
            </div>
        </div>
    )
}

export default MovieInfo;