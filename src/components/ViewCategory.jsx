import popularMovies from '../data/popularMovies.json'
import MovieCard from "./MovieCard";

function ViewCategory() {
    return (
        <>
            <div className='h-auto p-10 bg-black text-white '>
                <div className={'pb-6 flex flex-row justify-between items-center'}>
                    <p className={'text-3xl'}>Trending</p>
                </div>
                <div
                    className={' md:h-auto flex flex-row justify-between items-center flex-wrap'}>
                    {popularMovies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ViewCategory;