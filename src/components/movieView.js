import { faHeart, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from "react-bootstrap/Card";
import { addFavourites, deleteFavourites, getFavourites } from '../services/movies_utils';
import Toast, { notifyError, notifySuccess } from './Toast';

const MovieView = (props) => {
  const [getFavouritesData, setGetFavouritesData] = React.useState([]);

  const fetchFavourites = async () => {
    const data = await getFavourites();
    setGetFavouritesData(data);
  };

  React.useEffect(() => {
    fetchFavourites();
  }, []);

  const isMovieInFavourites = getFavouritesData.some(
    (movie) => movie.id === props.movieModel.id
  );

  const handleAddToFavourites = (movieModel) => {
    if (isMovieInFavourites) {
      notifyError("Already Added to Favourites");
    } else {
      addFavourites(movieModel);
      notifySuccess('Successfully added to Favourites');
      fetchFavourites();
    }
  };

  const handleRemoveFromFavourites = async (movieModel) => {
    try {
      await deleteFavourites(movieModel.id);
      notifySuccess('Removed from Favourites');
      setGetFavouritesData(getFavouritesData.filter(movie => movie.id !== movieModel.id));

    } catch (error) {
      notifyError(error.Body);
    }
  };

  function movieComponent() {
    return (
      <>
        <Toast />
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <a href={`/${props.selectedMenu}/${props.movieModel.id}`}>
            <Card.Img
              variant="top"
              src={`/img/${props.movieModel.poster}`}
              style={{ height: "200px", objectFit: "cover", flexShrink: 0 }}
            />
          </a>
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: "1 0 auto",
            }}
          >
            <Card.Title>{props.movieModel.title}</Card.Title>

            {props.selectedMenu !== "favourites" && (
              <a
                href="#addfavorite"
                style={{ alignSelf: "stretch" }}
                onClick={() => handleAddToFavourites(props.movieModel)}
              >
                Add to Favourites
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "red", paddingLeft: "5px" }}
                />
              </a>
            )}

            {props.selectedMenu === "favourites" && (
              <a
                href="#remove"
                style={{ alignSelf: "stretch" }}
                onClick={() => handleRemoveFromFavourites(props.movieModel)}
              >
                Remove from Favourites
                <FontAwesomeIcon
                  icon={faRectangleXmark}
                  style={{ color: "grey", paddingLeft: "5px" }}
                />
              </a>
            )}

          </Card.Body>
        </Card>
      </>
    );
  }
  return movieComponent();
};

export default MovieView;
