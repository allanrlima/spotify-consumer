import { observable, action, decorate } from "mobx";

class FavoriteTracksStore {
  favoriteTracks = new Set();

  saveFavoriteTrack = trackId => {
    this.favoriteTracks.add(trackId);
  };

  deleteFavoriteTrack = trackId => {
    this.favoriteTracks.delete(trackId);
  };
}

decorate(FavoriteTracksStore, {
  favoriteTracks: observable,
  saveFavoriteTrack: action,
  deleteFavoriteTrack: action
});

export default FavoriteTracksStore;
