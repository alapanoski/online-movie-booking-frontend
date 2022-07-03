import popularMovies from '../data/popularMovies.json';
import {IMAGE_URL} from "../tmdbApiConfig";

function HomeBanner() {
    const movie = popularMovies[0]
    return (
        <div
            className={'bg-black text-white h-[75vh] min-w-screen items-center relative'}>
            {
                <div className={'h-full flex flex-col md:flex-row items-center justify-center'}>
                    <img className={'z-0 h-full object-cover block absolute blur brightness-50'}
                         src={IMAGE_URL + movie.backdrop_path}
                         loading={'lazy'}></img>
                    <div className={'z-10 md:m-48 p-10 md:p-0  m:h-40 flex flex-col justify-evenly items-start gap-6'}>
                        <h1 className={'text-3xl md:text-6xl font-bold'}>{movie.title}</h1>
                        <p className={'text-3xl text-yellow-500'}>{movie.vote_average} &#9733;</p>
                        <p className={'hidden md:block text-xl'}>{movie.overview}</p>
                        <div className={'flex flex-row gap-6'}>
                            <a href={'seatselection'}><button className={'bg-red-800 rounded-3xl w-32 p-3'}>Book Now</button></a>
                            <a href={'movieinfo'}><button className={'border-2 border-red-800 rounded-3xl w-32 p-3'}>More</button></a>
                        </div>
                    </div>
                    <img className={'hidden md:block z-10 static md:m-32 h-auto md:h-[26rem] rounded-3xl'}
                         src={IMAGE_URL + movie.poster_path} loading={'lazy'}></img>
                </div>
            }
        </div>

    )
}

export default HomeBanner;