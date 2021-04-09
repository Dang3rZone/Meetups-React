import { createContext, useState } from 'react';

const FavoritesConext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesConextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHandler() {}
  function itemIsFavoriteHandler() {}
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };
  return (
    <FavoritesConext.Provider value={context}>
      {props.children}
    </FavoritesConext.Provider>
  );
}

export default FavoritesConext;
