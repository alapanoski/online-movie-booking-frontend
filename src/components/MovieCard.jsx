import {IMAGE_URL} from "../tmdbApiConfig";

function MovieCard(props) {
    const movie = props.movie;

    return (
        <div key={movie.id} className='h-full w-72 flex flex-col justify-evenly items-center'>
            <img className={'h-72 mx-auto rounded-2xl'} src={IMAGE_URL + movie.poster_path}
                 loading={'lazy'}></img>
            <p className={'text-center text-xl font-bold'}>{movie.title}</p>
        </div>
    )
}

export default MovieCard;