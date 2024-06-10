import React, { useEffect, useState } from "react";
import { getAllMovies, getFavourites, getMoviesComing, getTopRatedIndian, getTopRatedMovies } from '../services/movies_utils';
import Menu from "./menu";
import MovieView from './movieView';

const Home = () => {
    const [getAllMoviesData, setGetAllMoviesData] = React.useState([]);
    const [getFavouritesData, setGetFavouritesData] = React.useState([]);
    const [getMoviesComingData, setGetMoviesComingData] = React.useState([]);
    const [getTopRatedIndianData, setGetTopRatedIndianData] = React.useState([]);
    const [getTopRatedMoviesData, setGetTopRatedMoviesData] = React.useState([]);
    const [selectedMenu, setSelectedMenu] = useState("");
    const [searchText, setSearchText] = useState("");

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    const handleSearch = (text) => {
        setSearchText(text);
    };

    useEffect(() => {
        setSearchText(searchText);
    }, [searchText]);

    useEffect(() => {
        const fetchData = async () => {
            const getAllMoviesData = await getAllMovies();
            setGetAllMoviesData(getAllMoviesData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (selectedMenu === "getAllMovies") return;

            switch (selectedMenu) {
                case "comingSoon":
                    const getMoviesComingData = await getMoviesComing();
                    setGetMoviesComingData(getMoviesComingData);
                    break;
                case "topRatedIndian":
                    const getTopRatedIndianData = await getTopRatedIndian();
                    setGetTopRatedIndianData(getTopRatedIndianData);
                    break;
                case "topRatedMovies":
                    const getTopRatedMoviesData = await getTopRatedMovies();
                    setGetTopRatedMoviesData(getTopRatedMoviesData);
                    break;
                case "favourites":
                    const getFavouritesData = await getFavourites();
                    setGetFavouritesData(getFavouritesData);
                    break;
                default:
                    break;
            }
        };
        fetchData();
    }, [selectedMenu]);

    const filterMovies = (movies) => {
        if (!searchText) return movies;
        return movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    //For Returning the html content
    return (
        <>
            <Menu onMenuClick={handleMenuClick} onSearch={handleSearch} />
            <div className="grid-container " style={{ margin: "1.25rem" }}>
                <p className="text-dark" style={{ fontSize: "1.5625rem" }}>
                    Movies
                </p>
                {(selectedMenu === "getAllMovies" || selectedMenu === "") && (
                    <div className="row text-center">
                        {filterMovies(getAllMoviesData).map((movie, index) => (
                            <div className="col-md-2 mb-2" key={index}>
                                <MovieView movieModel={movie} selectedMenu={selectedMenu ||"getAllMovies"} />
                            </div>
                        ))}
                    </div>
                )}
                {selectedMenu === "comingSoon" && (
                    <div className="row text-center">
                        {filterMovies(getMoviesComingData).map((movie, index) => (
                            <div className="col-md-2 mb-2" key={index}>
                                <MovieView movieModel={movie} selectedMenu={selectedMenu} />
                            </div>
                        ))}
                    </div>
                )}
                {selectedMenu === "topRatedIndian" && (
                    <div className="row text-center">
                        {filterMovies(getTopRatedIndianData).map((movie, index) => (
                            <div className="col-md-2 mb-2" key={index}>
                                <MovieView movieModel={movie} selectedMenu={selectedMenu} />
                            </div>
                        ))}
                    </div>
                )}
                {selectedMenu === "topRatedMovies" && (
                    <div className="row text-center">
                        {filterMovies(getTopRatedMoviesData).map((movie, index) => (
                            <div className="col-md-2 mb-2" key={index}>
                                <MovieView movieModel={movie} selectedMenu={selectedMenu} />
                            </div>
                        ))}
                    </div>
                )}
                {selectedMenu === "favourites" && (
                    <div className="row text-center">
                        {filterMovies(getFavouritesData).map((movie, index) => (
                            <div className="col-md-2 mb-2" key={index}>
                                <MovieView movieModel={movie} selectedMenu={selectedMenu} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
