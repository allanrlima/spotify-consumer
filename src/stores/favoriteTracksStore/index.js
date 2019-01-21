import { observable, action, decorate } from "mobx";

class FavoriteTracksStore {
  favoriteTracks = [];

  saveFavoriteTrack = trackId => {
    this.favoriteTracks = [trackId, ...this.favoriteTracks];
  };

  deleteFavoriteTrack = trackId => {
    this.favoriteTracks = this.favoriteTracks.filter(item => item !== trackId);
  };
}

decorate(FavoriteTracksStore, {
  favoriteTracks: observable,
  saveFavoriteTrack: action,
  deleteFavoriteTrack: action
});

export default new FavoriteTracksStore();
