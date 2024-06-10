import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/movies_utils";
const Movie = () => {
    const [movie, setMovie] = useState({});
    const { prefix, id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const movieData = await getMovieById(id, prefix);
            setMovie(movieData);
        };
        fetchData();
    }, [id, prefix]);

    return (
        <div className="container-fluid mt-3">
            <a href="/" className="form-control-lg">
                {" "}
                Back To Home
            </a>
            <hr></hr>
            <table cellPadding={20} className="form-control-sm">
                <tbody valign="top">
                    <tr>
                        <td>
                            <a href={movie.posterurl}>
                                <img src={movie.posterurl} alt="poster" />
                            </a>
                        </td>
                        <td className="form-control-sm">
                            <h1>
                                {movie.title}({movie.year})
                            </h1>
                            <table>
                                <tbody valign="top">
                                    <tr>
                                        <td className="col-form-label-sm col-2">Imdb Rating</td>
                                        <td className="col-form-label-sm col-10">
                                            {movie.imdbRating}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-form-label-sm col-2">Content Rating</td>
                                        <td className="col-form-label-sm col-10">
                                            {movie.contentRating}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-form-label-sm col-2">Average Rating</td>
                                        <td className="col-form-label-sm col-10">
                                            {movie.averageRating}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-form-label-sm col-2">Duration</td>
                                        <td className="col-form-label-sm col-10">
                                            {movie.duration}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-form-label-sm col-2">Genres</td>
                                        <td className="col-form-label-sm col-10">
                                            {movie.genres && movie.genres.length > 0
                                                ? movie.genres.join(", ")
                                                : movie.genres}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-form-label-sm col-2">Actors</td>
                                        <td className="col-form-label-sm col-10">
                                            {movie.actors && movie.actors.length > 0
                                                ? movie.actors.join(", ")
                                                : movie.actors}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-form-label-sm col-2">Release Date</td>
                                        <td className="col-form-label-sm col-10">
                                            {movie.releaseDate}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-form-label-sm col-2">Story Line</td>
                                        <td className="col-form-label-sm col-10">
                                            {movie.storyline}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Movie;
