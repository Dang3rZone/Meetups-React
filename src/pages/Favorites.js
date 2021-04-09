import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';

import FavoritesContext from '../store/favorites-context';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites trips yet. Start adding some?</p>;
  } else {
    content = <MeetupList MeetupList={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h2>My Favorites</h2>
      {content}
    </section>
  );
}

export default FavoritesPage;
