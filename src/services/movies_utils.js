import axios from 'axios';

const getAllMovies = async () => {
    const response = await axios.get('http://localhost:4000/movies-in-theaters');
    return response.data;
};

const getMoviesComing = async () => {
    const response = await axios.get('http://localhost:4000/movies-coming');
    return response.data;
};

const getTopRatedIndian = async () => {
    const response = await axios.get('http://localhost:4000/top-rated-india');
    return response.data;
};

const getTopRatedMovies = async () => {
    const response = await axios.get('http://localhost:4000/top-rated-movies');
    return response.data;
};

const getFavourites = async () => {
    const response = await axios.get('http://localhost:4000/favourite');
    return response.data;
};

const addFavourites = async (movieData) => {
    const response = await axios.post('http://localhost:4000/favourite', movieData);
    return response.data;
};

const deleteFavourites = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:4000/favourite/${id}`);
        console.log('Delete response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Delete error:', error);
        throw error;
    }
};

const getMovieById = async (id, baseUrl) => {
    switch (baseUrl) {
        case 'getAllMovies':
            const response = await axios.get(`http://localhost:4000/movies-in-theaters/${id}`);
            return response.data;
        case 'comingSoon':
            const cResponse = await axios.get(`http://localhost:4000/movies-coming/${id}`);
            return cResponse.data;
        case 'topRatedIndian':
            const triResponse = await axios.get(`http://localhost:4000/top-rated-india/${id}`);
            return triResponse.data;
        case 'topRatedMovies':
            const trmResponse = await axios.get(`http://localhost:4000/top-rated-movies/${id}`);
            return trmResponse.data;
        case 'favourites':
            const fResponse = await axios.get(`http://localhost:4000/favourite/${id}`);
            return fResponse.data;
        default:
            const defResponse = await axios.get(`http://localhost:4000/movies-in-theaters/${id}`);
            return defResponse.data;

    }
};

export { addFavourites, deleteFavourites, getAllMovies, getFavourites, getMovieById, getMoviesComing, getTopRatedIndian, getTopRatedMovies };

