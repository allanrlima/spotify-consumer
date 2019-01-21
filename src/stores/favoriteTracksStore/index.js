import { observable, action, decorate } from "mobx";

class FavoriteTracksStore {
  favoriteTracks = [];

  saveFavoriteTrack = trackId => {
    if (this.favoriteTracks.length <= 4) {
      this.favoriteTracks = [trackId, ...this.favoriteTracks];
    } else {
      window.scrollTo(0, 0);
    }
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
