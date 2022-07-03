import popularMovies from '../data/popularMovies.json'
import topRatedMovies from '../data/topRatedMovies.json';
import MovieCard from "./MovieCard";

function MovieCatalogue() {
    return (
        <>
            <div className='h-auto p-10 bg-black text-white md:overflow-x-hidden'>
                <div className={'pb-6 flex flex-row justify-between items-center'}>
                    <p className={'text-3xl'}>Trending</p>
                    <a href={'viewcategory'}>
                        <button className={'text-white self-end border-2 border-red-800 rounded-3xl w-32 p-3'}>View
                            more
                        </button>
                    </a>
                </div>
                <div
                    className={'h-[45rem] md:h-auto overflow-y-hidden md:overflow-y-auto md:w-[330rem] flex flex-col md:flex-row justify-between items-center'}>
                    {popularMovies.map((movie) => (
                        <>
                            <a href={'movieinfo'}>
                                <MovieCard movie={movie}/>
                            </a>
                        </>
                    ))}
                </div>
            </div>
            <div className='h-auto p-10 bg-black text-white md:overflow-x-hidden'>
                <div className={'pb-6 flex flex-row justify-between items-center'}>
                    <p className={'text-3xl'}>Top Rated</p>
                    <a href={'viewcategory'}>
                        <button className={'text-white self-end border-2 border-red-800 rounded-3xl w-32 p-3'}>View
                            more
                        </button>
                    </a>
                </div>
                <div
                    className={'h-[45rem] md:h-auto overflow-y-hidden md:overflow-y-auto md:w-[330rem] flex flex-col md:flex-row justify-between items-center'}>
                    {topRatedMovies.map((movie) => (
                        <>
                            <a href={'movieinfo'}>
                                <MovieCard movie={movie}/>
                            </a>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MovieCatalogue;