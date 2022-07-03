import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomeBanner from "./components/HomeBanner";
import MovieCatalogue from "./components/MovieCatalogue";
import Footer from "./components/Footer";
import MovieInfo from "./components/MovieInfo";
import SeatSelector from "./components/SeatSelector";
import Checkout from "./components/Checkout";
import ViewCategory from "./components/ViewCategory";
import Bruh from './components/Bruh';
import End from "./components/End";

function App() {
    return (
        <div className="min-h-screen container mx-auto overflow-x-hidden">
            <Router>
                <Routes>
                    <Route path="/" element={
                        <>
                            <HomeBanner/>
                            <MovieCatalogue/>
                        </>
                    }/>
                    <Route path="/viewcategory" element={<ViewCategory/>}/>
                    <Route path="/movieinfo" element={<MovieInfo/>}/>
                    <Route path="/seatselection" element={<SeatSelector/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/end" element={<End/>}/>
                    <Route path="*" element={<Bruh/>}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    )
}

export default App;